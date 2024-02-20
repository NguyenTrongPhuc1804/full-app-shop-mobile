import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import {COLOR} from '../constant/color';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DrawerItemComponent from '../components/DrawerItemComponent';
import LogoShop from '../assets/LogoShop.jpg';
import {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {getInfoUser} from '../redux/slices/userSlice';
const DrawerScreen = props => {
  const dispatch = useDispatch();
  const {isLogin, userInfo} = useSelector(state => state.authSlice);
  const {activeDrawer} = useSelector(state => state.categorySlice);
  const {user} = useSelector(state => state.userSlice);
  const [active, setActive] = useState('Trang chủ');
  useEffect(() => {
    setActive(activeDrawer);
  }, [activeDrawer, isLogin]);
  useEffect(() => {}, []);
  return (
    <View
      style={{flex: 1, position: 'relative', backgroundColor: COLOR.primary}}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Image
          resizeMode="cover"
          style={{width: 100, height: 100, borderRadius: 50}}
          source={LogoShop}
        />
        <Text
          numberOfLines={1}
          style={{
            fontSize: 18,
            color: COLOR.second,
            fontWeight: 'bold',
            marginTop: 10,
          }}>
          {isLogin ? user?.name : 'Shop phone'}
        </Text>
      </View>
      <View
        style={{
          flex: 3,
          paddingTop: 20,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: 'white',
        }}>
        <DrawerContentScrollView {...props} style={{}}>
          <DrawerItemComponent
            active={active}
            name={'Trang chủ'}
            setActive={setActive}
          />
          <DrawerItemComponent
            active={active}
            name={'Cửa hàng'}
            setActive={setActive}
          />
          <DrawerItemComponent
            active={active}
            name={'Giỏ hàng'}
            setActive={setActive}
          />
          <DrawerItemComponent
            active={active}
            name={'Yêu thích'}
            setActive={setActive}
          />
          <DrawerItemComponent
            active={active}
            name={'Thông tin'}
            setActive={setActive}
          />
          {!isLogin ? (
            <DrawerItemComponent
              active={active}
              name={'Login'}
              setActive={setActive}
            />
          ) : (
            <DrawerItemComponent
              active={active}
              name={'Logout'}
              setActive={setActive}
            />
          )}
        </DrawerContentScrollView>
      </View>
      <View
        style={{alignItems: 'center', justifyContent: 'center', padding: 15}}>
        <Text style={{color: 'white', fontSize: 16}}>@ Shop mobile phone</Text>
      </View>
    </View>
  );
};

export default DrawerScreen;
