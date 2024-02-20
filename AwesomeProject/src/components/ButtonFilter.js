import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLOR} from '../constant/color';

const ButtonFilter = ({active, name, setActive, setKeyWord}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        setActive(name);
        setKeyWord(name);
      }}
      style={{
        backgroundColor: active == name ? COLOR.third : 'white',
        padding: 10,
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
      <Text style={{color: active == name ? 'white' : 'black', fontSize: 18}}>
        {name}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonFilter;
