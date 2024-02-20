import {View, Text, FlatList} from 'react-native';
import React from 'react';
import CartProduct from '../components/CardProduct/CartProduct';
import BoxSlide from '../components/BoxSlide';
import {getAllProduct} from '../redux/slices/productSlice';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {useRoute} from '@react-navigation/native';
import {useState} from 'react';
import SkeletonShop from '../common/skeleton/SkeletonShop';
import {COLOR} from '../constant/color';

const CategoryScreen = () => {
  const dispatch = useDispatch();

  const {allProduct} = useSelector(state => state.productSlice);
  const {items} = useSelector(state => state.filterSlice);
  const {favoriteItem} = useSelector(state => state.favoriteSlice);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    let min_price = '';
    let max_price = '';
    let order, sortBy;
    switch (items?.active) {
      case 'Mới nhất':
        sortBy = 'id';
        order = 'asc';
        min_price = '';
        max_price = '';
        break;
      case 'Giá giảm':
        sortBy = 'price_sale_off';
        order = 'desc';
        min_price = items.fromValue;
        max_price = items.toValue;
        break;
      case 'Giá tăng':
        sortBy = 'price_sale_off';
        order = 'asc';
        min_price = items.fromValue;
        max_price = items.toValue;
        break;
      case 'Cũ nhất':
        sortBy = 'id';
        order = 'desc';
        min_price = items.fromValue;
        max_price = items.toValue;
        break;
      case 'Đang giảm giá':
        sortBy = 'price_sale_off';
        order = 'desc';
        min_price = items.fromValue;
        max_price = items.toValue;
        break;
      default:
        break;
    }

    dispatch(getAllProduct({min_price, max_price, order, sortBy})).then(res =>
      setIsLoading(false),
    );
  }, [items, favoriteItem]);
  if (isLoading) {
    return <SkeletonShop />;
  } else {
    return (
      <View style={{backgroundColor: COLOR.primary}}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: COLOR.second,
            paddingHorizontal: 10,
            marginTop: 20,
            marginBottom: 10,
          }}>
          Tất cả sản phẩm
        </Text>
        <FlatList
          columnWrapperStyle={{
            paddingHorizontal: 10,
            marginTop: 10,
          }}
          contentContainerStyle={{paddingBottom: 130}}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={allProduct}
          renderItem={({item}) => <CartProduct item={item} />}
          ListHeaderComponent={<BoxSlide />}
        />
      </View>
    );
  }
};

export default CategoryScreen;
