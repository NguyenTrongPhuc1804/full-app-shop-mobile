import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import moment from 'moment/moment';
import Clipboard from '@react-native-clipboard/clipboard';
import {BottomSheetFlatList, BottomSheetModal} from '@gorhom/bottom-sheet';
import CardBottomSheetHistory from './CardBottomSheetHistory';
import {showNoti} from '../toolkit/helper';
import {COLOR} from '../constant/color';

const BottomModal = ({
  bottomSheetModalRef,
  snapPoints,
  handleSheetChanges,
  item,
}) => {
  console.log(item, 'detail');

  return (
    <BottomSheetModal
      ref={bottomSheetModalRef}
      index={1}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}>
      <View style={{padding: 10}}>
        <Text style={{fontSize: 15, color: COLOR.black, fontWeight: 'bold'}}>
          Chi tiết đơn hàng:
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={styles.textBottomSheet}>Mã sản phẩm: {item?.code}</Text>
          <TouchableOpacity
            onPress={() => {
              Clipboard.setString(item?.code);
              showNoti('Đã copy mã đơn hàng vào bộ nhớ đệm');
            }}
            style={{
              backgroundColor: COLOR.primary,
              padding: 5,
              borderRadius: 5,
            }}>
            <Text style={styles.text}>Sao chép {}</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.textBottomSheet}>
          Ngày mua: {moment(item?.created_at).format('DD/MM/YYYY')}
        </Text>
        <Text style={{fontSize: 14, color: COLOR.black, marginTop: 4}}>
          Tổng đơn hàng: {Math.floor(item?.amount).toLocaleString()} đ
        </Text>
      </View>
      <BottomSheetFlatList
        data={item.order_items}
        renderItem={({item}) => <CardBottomSheetHistory item={item} />}
        keyExtractor={item => item.id}
        contentContainerStyle={{padding: 10}}
      />
    </BottomSheetModal>
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
export default BottomModal;
