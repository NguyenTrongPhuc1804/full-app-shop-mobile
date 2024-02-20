import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import BoxSlide from '../components/BoxSlide';
import {ScrollView} from 'react-native';
import Category from '../components/Category/Category';
import CategorySpecial from '../components/Category/CategorySpecial';
import {useSelector, useDispatch} from 'react-redux';
import {
  getAllProduct,
  getProduct,
  getProductIsNew,
  getProductSpecial,
} from '../redux/slices/productSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {apiMobile} from '../services/baseService';
import {useState} from 'react';
import {checkLogin} from '../redux/slices/authSlice';
import {COLOR} from '../constant/color';
import {getInfoUser} from '../redux/slices/userSlice';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const {isLogin, userToken} = useSelector(state => state.authSlice);
  const {listProduct, listProductIsNew, listProductSpecial} = useSelector(
    state => state.productSlice,
  );
  const [isSkeleton, setIsSkeleton] = useState(true);
  useEffect(() => {
    const setHeader = async () => {
      const access_token = await AsyncStorage.getItem('access_token');
      if (access_token) {
        apiMobile.interceptors.request.use(
          async config => {
            config.headers.Authorization =
              'Bearer ' + (await AsyncStorage.getItem('access_token'));
            return config;
          },
          function (error) {
            return Promise.reject(error);
          },
          dispatch(getInfoUser()),
        );
        dispatch(checkLogin(true));
      } else {
        dispatch(checkLogin(false));
      }
    };
    setHeader();
  }, [userToken, isLogin]);
  useEffect(() => {
    dispatch(getProduct()).then(res => {
      setIsSkeleton(false);
    });
    dispatch(getProductSpecial());
    dispatch(getProductIsNew());
    dispatch(
      getAllProduct({min_price: '', max_price: '', order: 'asc', sortBy: 'id'}),
    );
  }, []);
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: COLOR.primary,
      }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            color: COLOR.second,
            paddingHorizontal: 10,
            marginTop: 20,
          }}>
          Phone store
        </Text>
        <BoxSlide />
        <View style={{paddingHorizontal: 10, marginBottom: 70}}>
          <Category />
          <CategorySpecial
            title="Danh mục nổi bật"
            listProduct={listProduct}
            isSkeleton={isSkeleton}
          />
          <CategorySpecial
            title="Danh mục sản phẩm mới"
            listProduct={listProductIsNew}
            isSkeleton={isSkeleton}
          />
          <CategorySpecial
            title="Danh mục sản phẩm đặc biệt"
            listProduct={listProductSpecial}
            isSkeleton={isSkeleton}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
