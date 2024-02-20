import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLOR} from '../constant/color';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const IconHeader = ({name = 'menu', onPress}) => {
  const navigate = useNavigation();
  const {cart, sum} = useSelector(state => state.cartSlice);
  useEffect(() => {}, [cart]);

  return (
    <TouchableOpacity
      onPress={() => {
        if (name === 'menu') {
          navigate.toggleDrawer();
        } else {
          onPress();
        }
      }}>
      <Text>
        <Ionicons name={name} size={28} color={COLOR.second} />
      </Text>
      {name === 'cart' && cart.length > 0 && (
        <Text
          style={{
            position: 'absolute',
            color: 'white',
            right: -5,
            top: -5,
            backgroundColor: 'red',
            borderRadius: 50,
            paddingHorizontal: 6,
            paddingVertical: 1,
            fontSize: 12,
          }}>
          {sum}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default IconHeader;
