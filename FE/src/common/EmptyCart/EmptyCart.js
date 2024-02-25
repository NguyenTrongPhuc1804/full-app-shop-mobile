import {View, Text, Image} from 'react-native';
import React from 'react';
import ImageEmpty from '../../assets/emptyCart.png';
import {COLOR} from '../../constant/color';
const EmptyCart = () => {
  return (
    <View
      style={{width: '100%', height: '100%', backgroundColor: COLOR.second}}>
      <Image
        style={{
          width: '100%',
          height: 200,
          resizeMode: 'contain',
          marginTop: 150,
        }}
        source={ImageEmpty}></Image>
      <Text
        style={{
          color: COLOR.third,
          fontSize: 20,
          fontWeight: 'bold',
          textAlign: 'center',
        }}>
        Chưa có sản phẩm nào trong giỏ hàng
      </Text>
    </View>
  );
};

export default EmptyCart;
