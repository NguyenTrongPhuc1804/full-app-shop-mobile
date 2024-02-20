import {View, Text, TouchableOpacity, Image, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import RatingCus from '../Rating';
import {useNavigation} from '@react-navigation/native';
import {COLOR} from '../../constant/color';
import {useDispatch, useSelector} from 'react-redux';
import {addCart, downCart, removeCart} from '../../redux/slices/cartSlice';
const CheckCart = ({item, cart}) => {
  const navigate = useNavigation();
  const dispatch = useDispatch();
  const [num, setNum] = useState(1);
  useEffect(() => {
    setNum(item?.quantity);
  }, [item]);

  return (
    <TouchableOpacity
      onLongPress={() => {
        if (cart) {
          Alert.alert(
            'Thông báo',
            'Bạn có chắc chắn xóa sản phẩm này khỏi giỏ hàng',
            [
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              {text: 'OK', onPress: () => dispatch(removeCart(item.id))},
            ],
          );
        }
      }}
      onPress={() => {
        navigate.navigate('ProductDetail', {id: item.id});
      }}
      style={{
        marginBottom: 10,
        width: cart ? '100%' : 250,
        flexDirection: 'row',
        padding: 10,
        backgroundColor: COLOR.primary,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
        borderRadius: 10,
        marginRight: 10,
      }}>
      <Image
        resizeMode="contain"
        style={{
          flex: 1.5,
          borderRadius: 10,
        }}
        source={{uri: item.image}}
      />
      <View
        style={{
          flex: 2,
          paddingLeft: 10,
          justifyContent: 'center',
          color: COLOR.second,
        }}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: 'bold',
            marginBottom: 6,
            color: COLOR.second,
          }}
          numberOfLines={1}>
          {item.name}
        </Text>
        <Text
          style={{
            textAlign: 'left',
            fontSize: 12,
            marginBottom: 6,
            color: COLOR.second,
          }}
          numberOfLines={1}>
          {item.summary}
        </Text>
        {!cart ? (
          <Text numberOfLines={1}>
            <RatingCus color={COLOR.primary} rating={item.rating} />
          </Text>
        ) : (
          ''
        )}

        <Text
          style={{
            fontSize: 14,
            fontWeight: 'bold',
            color: '#9ADE7B',
            marginBottom: 6,
          }}
          numberOfLines={1}>
          {cart
            ? (num * item?.price_sale_off)?.toLocaleString()
            : item?.price?.toLocaleString()}
          đ
        </Text>
      </View>
      {cart ? (
        <View
          style={{
            flex: 2,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
              if (num <= 1) {
                dispatch(removeCart(item.id));
              } else {
                setNum(num => (num -= 1));
                dispatch(downCart({id: item.id, quantity: 1}));
              }
            }}
            style={{
              paddingHorizontal: 10,
              paddingVertical: 2,
              backgroundColor: COLOR.third,
              borderRadius: 10,
            }}>
            <Text
              style={{fontSize: 18, fontWeight: 'bold', color: COLOR.second}}>
              -
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              color: COLOR.second,
              fontSize: 16,
              marginHorizontal: 5,
              fontWeight: 'bold',
            }}>
            {num}
          </Text>
          <TouchableOpacity
            onPress={() => {
              setNum(num => (num += 1));
              dispatch(addCart({...item, quantity: 1}));
            }}
            style={{
              paddingHorizontal: 10,
              paddingVertical: 2,
              backgroundColor: COLOR.third,
              borderRadius: 10,
            }}>
            <Text
              style={{fontSize: 18, fontWeight: 'bold', color: COLOR.second}}>
              +
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        ''
      )}
    </TouchableOpacity>
  );
};

export default CheckCart;
