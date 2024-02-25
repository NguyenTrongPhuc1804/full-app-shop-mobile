import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLOR} from '../../constant/color';
import {useDispatch, useSelector} from 'react-redux';
import {setFavorite} from '../../redux/slices/favoriteSlice';
import {useNavigation} from '@react-navigation/native';
import {addCart} from '../../redux/slices/cartSlice';

const CartProduct = ({item, detail = '50%', total}) => {
  const navigate = useNavigation();
  const dispatch = useDispatch();
  const {favoriteItem} = useSelector(state => state.favoriteSlice);
  const {cart} = useSelector(state => state.cartSlice);
  const [heart, setHeart] = useState(false);
  const sale = ((item?.price - item?.price_sale_off) / item?.price) * 100;
  const handleHeartActive = () => {
    setHeart(!heart);
    dispatch(setFavorite(item.id));
  };
  const handleAddCart = () => {
    dispatch(addCart({...item, quantity: 1}));
  };
  useEffect(() => {
    favoriteItem.includes(item?.id) ? setHeart(true) : setHeart(false);
  }, [favoriteItem]);

  return (
    <TouchableOpacity
      onPress={() => {
        navigate.push('ProductDetail', {id: item.id});
      }}
      style={{
        width: detail,
        height: 270,
        padding: 5,
      }}>
      <View
        style={{
          width: '100%',
          height: '100%',
          padding: 10,
          backgroundColor: 'white',
          borderRadius: 10,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        }}>
        <View style={{width: '100%', flex: 1, alignItems: 'center'}}>
          <Image
            resizeMode="contain"
            style={{width: '60%', height: '100%'}}
            source={{
              uri: item?.image,
            }}
          />
        </View>
        <View style={total ? {alignItems: 'center'} : {paddingLeft: 10}}>
          <Text
            numberOfLines={1}
            style={{
              fontWeight: 'bold',
              fontSize: 16,
              fontWeight: 'bold',
              color: COLOR.black,
            }}>
            {item?.name}
          </Text>
          <Text
            numberOfLines={1}
            style={{
              fontSize: 14,
              color: COLOR.black,
            }}>
            {item?.summary}
          </Text>
          {total ? (
            <Text
              numberOfLines={1}
              style={{
                fontSize: 14,
                color: 'red',
              }}>
              Số lượng : {item?.quantity}
            </Text>
          ) : (
            ''
          )}
          <Text
            numberOfLines={1}
            style={{
              textDecorationLine: 'line-through',
              fontSize: 14,
              color: '#333',
            }}>
            {item?.price?.toLocaleString()} đ
          </Text>
          <Text
            numberOfLines={1}
            style={{
              fontWeight: 'bold',
              color: 'red',
              fontSize: 14,
            }}>
            {item?.price_sale_off?.toLocaleString()} đ
          </Text>
        </View>
        <TouchableOpacity
          onPress={handleHeartActive}
          style={{
            position: 'absolute',
            padding: 8,
            backgroundColor: 'white',
            borderRadius: 10,
          }}>
          <Ionicons
            name={heart ? 'heart' : 'heart-outline'}
            size={24}
            color={COLOR.third}
          />
        </TouchableOpacity>
        {total ? (
          ''
        ) : (
          <TouchableOpacity
            onPress={handleAddCart}
            style={{
              position: 'absolute',
              padding: 8,
              backgroundColor: 'white',
              borderRadius: 10,
              bottom: 0,
              right: 0,
            }}>
            <Ionicons name={'cart'} size={26} color={COLOR.primary} />
          </TouchableOpacity>
        )}
        <View
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            backgroundColor: COLOR.primary,
            padding: 6,
            borderTopRightRadius: 10,
            borderBottomLeftRadius: 10,
          }}>
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 12,
            }}>
            Sale {Math.floor(sale)}%
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CartProduct;
