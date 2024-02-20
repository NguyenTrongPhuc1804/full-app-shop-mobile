import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getHistory} from '../redux/slices/historySlice';
import randomColor from 'randomcolor';
import ColorfulCard from '@freakycoder/react-native-colorful-card';
import logo1 from '../assets/logo-noback.png';
import {COLOR} from '../constant/color';
import CardHistory from '../components/CardHistory';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import CardBottomSheetHistory from '../components/CardBottomSheetHistory';
import BottomModal from '../components/BottomModal';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const HistoryScreen = () => {
  const dispatch = useDispatch();
  const {listHistory} = useSelector(state => state.historySlice);
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const bottomSheetModalRef = useRef(null);
  const snapPoints = useMemo(() => ['80%', '85%'], []);
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback(index => {
    console.log('handleSheetChanges', index);
    index !== -1 ? setIsOpen(true) : setIsOpen(false);
  }, []);

  useEffect(() => {
    dispatch(getHistory()).then(res => {
      setLoading(false);
    });
  }, []);
  if (loading) {
    return (
      <SkeletonPlaceholder borderRadius={4} backgroundColor={COLOR.primary}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(item => (
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 10,
              paddingHorizontal: 10,
            }}>
            <View style={{width: '100%', height: 100, borderRadius: 10}} />
          </View>
        ))}
      </SkeletonPlaceholder>
    );
  }
  return (
    <BottomSheetModalProvider>
      <View
        style={{
          width: '100%',
          padding: 10,
          opacity: isOpen ? 0.5 : 1,
          pointerEvents: isOpen ? 'none' : 'auto',
        }}>
        <Text
          style={{
            fontSize: 18,
            marginBottom: 10,
            fontWeight: 'bold',
            color: COLOR.black,
          }}>
          Lịch sử mua hàng
        </Text>
        <FlatList
          keyExtractor={item => item.id}
          data={listHistory}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => {
                handlePresentModalPress();
                setItem(item);
              }}>
              <CardHistory item={item} />
            </TouchableOpacity>
          )}
          showsVerticalScrollIndicator={false}
        />
        <BottomModal
          handleSheetChanges={handleSheetChanges}
          snapPoints={snapPoints}
          bottomSheetModalRef={bottomSheetModalRef}
          item={item}
        />
      </View>
    </BottomSheetModalProvider>
  );
};
const styles = StyleSheet.create({
  text: {color: COLOR.second, fontSize: 14},
  textBottomSheet: {
    color: COLOR.black,
    fontSize: 14,
  },
});
export default HistoryScreen;
