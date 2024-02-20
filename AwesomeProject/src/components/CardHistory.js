import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import {COLOR} from '../constant/color';
import moment from 'moment/moment';
import Clipboard from '@react-native-clipboard/clipboard';

import BottomModal from './BottomModal';

const CardHistory = ({item}) => {
  useEffect(() => {}, [item]);
  return (
    <View
      style={{
        backgroundColor: COLOR.primary,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
      }}>
      <View>
        <Text style={styles.text}>Mã code: {item?.code}</Text>
        <Text style={styles.text}>
          {item?.order_items.reduce(
            (pre, cur) => pre + Number(cur.quantity),
            0,
          )}{' '}
          sản phẩm
        </Text>
        <Text style={styles.text}>
          Tổng bill: {Math.floor(item?.amount).toLocaleString()} đ
        </Text>
      </View>
      <Text
        style={[
          styles.text,
          {backgroundColor: COLOR.shadow, padding: 5, borderRadius: 5},
        ]}>
        Date: {moment(item?.created_at).format('DD/MM')}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  text: {color: COLOR.second, fontSize: 14},
  textBottomSheet: {
    color: COLOR.black,
    fontSize: 14,
    marginBottom: 2,
  },
});
export default CardHistory;
