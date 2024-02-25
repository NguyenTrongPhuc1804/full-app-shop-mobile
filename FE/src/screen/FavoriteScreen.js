import {View, Text, FlatList, Image} from 'react-native';
import React from 'react';
import CartProduct from '../components/CardProduct/CartProduct';
import BoxSlide from '../components/BoxSlide';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {useState} from 'react';
import {getAllProduct} from '../redux/slices/productSlice';
import imageSearch from '../assets/Searching.png';
import {COLOR} from '../constant/color';

const FavoriteScreen = () => {
  const dispatch = useDispatch();
  const {allProduct} = useSelector(state => state.productSlice);
  const {favoriteItem} = useSelector(state => state.favoriteSlice);
  const [items, setItems] = useState([]);
  useEffect(() => {
    let itemFavorite = allProduct?.filter(item =>
      favoriteItem.includes(item.id),
    );
    setItems(itemFavorite);
  }, [favoriteItem]);
  if (items.length <= 0) {
    return (
      <View
        style={{
          backgroundColor: COLOR.primary,
          width: '100%',
          height: '100%',
          justifyContent: 'center',
        }}>
        <Image style={{width: '100%', height: 200}} source={imageSearch} />
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            color: COLOR.third,
            textAlign: 'center',
            paddingHorizontal: 10,
          }}>
          Không có sản phẩm yêu thích nào !!
        </Text>
      </View>
    );
  } else {
    return (
      <View style={{paddingHorizontal: 10}}>
        <FlatList
          contentContainerStyle={{paddingBottom: 130}}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={items}
          renderItem={({item}) => <CartProduct item={item} />}
        />
      </View>
    );
  }
};

export default FavoriteScreen;
