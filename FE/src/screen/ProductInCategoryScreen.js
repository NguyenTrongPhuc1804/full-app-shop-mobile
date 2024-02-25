import {View, Text, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useRoute} from '@react-navigation/native';
import {getProductInCategory} from '../redux/slices/categorySlice';
import CartProduct from '../components/CardProduct/CartProduct';
import {useState} from 'react';
import SkeletonSearch from '../common/skeleton/SkeletonSearch';

const ProductInCategoryScreen = () => {
  const dispatch = useDispatch();
  const {listProductInCategory} = useSelector(state => state.categorySlice);
  const route = useRoute();
  const {id} = route.params;
  const {favoriteItem} = useSelector(state => state.favoriteSlice);
  const {items} = useSelector(state => state.filterSlice);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let min_price = '';
    let max_price = '';
    let order, sortBy;
    switch (items?.active) {
      case 'Tất cả':
        sortBy = 'id';
        order = 'asc';
        min_price = '';
        max_price = '';
        break;
      case 'Mới nhất':
        sortBy = 'id';
        order = 'asc';
        min_price = items.fromValue;
        max_price = items.toValue;
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

    dispatch(
      getProductInCategory({min_price, max_price, order, sortBy, id}),
    ).then(res => {
      if (!res.error) {
        setLoading(false);
      } else {
        console.log(res);
      }
    });
  }, [items, favoriteItem]);
  if (loading) {
    return <SkeletonSearch />;
  }
  return (
    <View style={{paddingTop: 20}}>
      <FlatList
        columnWrapperStyle={{paddingHorizontal: 10}}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={listProductInCategory}
        renderItem={({item}) => <CartProduct item={item} />}
      />
    </View>
  );
};

export default ProductInCategoryScreen;
