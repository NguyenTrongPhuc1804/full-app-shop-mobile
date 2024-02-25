import {View, Text, Image} from 'react-native';
import React from 'react';
import {COLOR} from '../../constant/color';
import ImageWarning from '../../assets/Sign-in.png';

const RequestLogin = () => {
  return (
    <View
      style={{width: '100%', height: '100%', backgroundColor: COLOR.primary}}>
      <Image
        style={{
          width: '100%',
          height: 200,
          resizeMode: 'cover',
          marginTop: 150,
        }}
        source={ImageWarning}></Image>
      <Text
        style={{
          color: COLOR.third,
          fontSize: 22,
          fontWeight: 'bold',
          textAlign: 'center',
        }}>
        Chức năng yêu cầu đăng nhập
      </Text>
    </View>
  );
};

export default RequestLogin;
