import {View, Text, ActivityIndicator} from 'react-native';
import React from 'react';
import {COLOR} from '../constant/color';

const LoadingCus = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <ActivityIndicator size="large" color={COLOR.primary} />
    </View>
  );
};

export default LoadingCus;
