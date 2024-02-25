import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {DrawerItem} from '@react-navigation/drawer';
import {COLOR} from '../constant/color';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {logout} from '../redux/slices/authSlice';
const DrawerItemComponent = ({active, name, setActive}) => {
  const dispatch = useDispatch();
  const navigate = useNavigation();
  let label, icon;
  switch (name) {
    case 'Trang chủ':
      label = 'Trang chủ';
      icon = 'home';
      break;
    case 'Cửa hàng':
      label = 'Cửa hàng';
      icon = 'cart';
      break;
    case 'Giỏ hàng':
      label = 'Giỏ hàng';
      icon = 'bag-handle';
      break;
    case 'Yêu thích':
      label = 'Yêu thích';
      icon = 'heart';
      break;
    case 'Thông tin':
      label = 'Thông tin';
      icon = 'person';
      break;
    case 'Login':
      label = 'Đăng nhập';
      icon = 'log-out';
      break;
    case 'Logout':
      label = 'Đăng xuất';
      icon = 'log-in';
      break;
    default:
      break;
  }
  return (
    <DrawerItem
      labelStyle={{fontSize: 16}}
      label={label}
      activeTintColor={COLOR.third}
      focused={active === name ? true : false}
      icon={({focused, color, size}) => (
        <Ionicons
          color={color}
          size={size}
          name={focused ? `${icon}` : `${icon}-outline`}
        />
      )}
      onPress={() => {
        if (name === 'Logout') {
          setActive(name);
          navigate.navigate('Trang chủ');
          dispatch(logout());
        } else {
          setActive(name);
          navigate.navigate(name);
        }
      }}></DrawerItem>
  );
};

export default DrawerItemComponent;
