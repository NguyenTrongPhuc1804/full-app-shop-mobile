import {View, Text, Image, Dimensions} from 'react-native';
import React, {useEffect, useState} from 'react';
import InfoList from '../../components/InfoList/InfoList';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {COLOR} from '../../constant/color';
import RequestLogin from '../../common/RequestLogin/RequestLogin';
import SkeletonShop from '../../common/skeleton/SkeletonShop';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getInfoUser} from '../../redux/slices/userSlice';
const {height} = Dimensions.get('window');
const InfoScreen = () => {
  const navigate = useNavigation();
  const dispatch = useDispatch();
  const {isLogin} = useSelector(state => state.authSlice);
  const goInfoShip = () => {
    navigate.navigate('InfoShip');
  };
  const goInfoCart = () => {
    navigate.navigate('InfoCart');
  };
  const goHistory = () => {
    navigate.navigate('HistoryScreen');
  };
  useEffect(() => {
    dispatch(getInfoUser());
  }, []);

  if (isLogin) {
    return (
      <View style={{width: '100%', paddingHorizontal: 20}}>
        <InfoList
          title={'Thông tin người dùng'}
          name="address-book"
          onPress={goInfoShip}
        />
        <InfoList
          title={'Thông tin đơn hàng'}
          name="shipping-fast"
          onPress={goInfoCart}
        />
        <InfoList
          title={'Lịch sử mua hàng'}
          name="history"
          onPress={goHistory}
        />
      </View>
    );
  } else {
    return (
      <View
        style={{width: '100%', height: height, backgroundColor: COLOR.primary}}>
        <RequestLogin />
      </View>
    );
  }
};

export default InfoScreen;
