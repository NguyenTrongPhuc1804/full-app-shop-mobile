import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import React, {useState} from 'react';
import ButtonFilter from '../components/ButtonFilter';
import RangeSlider from 'react-native-range-slider-expo';
import {COLOR} from '../constant/color';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {setFilter} from '../redux/slices/filterSlice';
import {useNavigation} from '@react-navigation/native';
const FilterScreen = () => {
  const navigate = useNavigation();
  const dispatch = useDispatch();
  const {items} = useSelector(state => state.filterSlice);
  const [active, setActive] = useState(items.active);
  const [fromValue, setFromValue] = useState(items.fromValue);
  const [toValue, setToValue] = useState(items.toValue);
  const [value, setValue] = useState(0);
  const setKeyWord = value => {
    setActive(value);
  };
  const applyFilter = () => {
    dispatch(setFilter({active, fromValue, toValue}));
    navigate.goBack();
  };
  useEffect(() => {}, []);
  return (
    <View
      style={{
        marginTop: 20,
        position: 'relative',
        height: '100%',
      }}>
      <View style={{paddingHorizontal: 10}}>
        <Text
          style={{
            color: COLOR.black,
            fontSize: 18,
            fontWeight: 'bold',
            paddingHorizontal: 10,
          }}>
          Lọc theo sản phẩm
        </Text>
        <View
          style={{
            flexWrap: 'wrap',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            gap: 10,
            marginTop: 10,
          }}>
          <ButtonFilter
            setKeyWord={setKeyWord}
            name={'Tất cả'}
            setActive={setActive}
            active={active}
          />
          <ButtonFilter
            setKeyWord={setKeyWord}
            name={'Mới nhất'}
            setActive={setActive}
            active={active}
          />

          <ButtonFilter
            setKeyWord={setKeyWord}
            name={'Giá giảm'}
            setActive={setActive}
            active={active}
          />
          <ButtonFilter
            setKeyWord={setKeyWord}
            name={'Giá tăng'}
            setActive={setActive}
            active={active}
          />
          <ButtonFilter
            setKeyWord={setKeyWord}
            name={'Cũ nhất'}
            setActive={setActive}
            active={active}
          />
          <ButtonFilter
            setKeyWord={setKeyWord}
            name={'Đang giảm giá'}
            setActive={setActive}
            active={active}
          />
        </View>
      </View>
      <View style={{width: '100%', marginTop: 20, paddingHorizontal: 20}}>
        <Text style={{fontSize: 18, fontWeight: 'bold', color: COLOR.black}}>
          Lọc theo giá
        </Text>
        <View style={{marginTop: 20, height: 80}}>
          <RangeSlider
            styleSize={'small'}
            fromKnobColor={COLOR.primary}
            toKnobColor={COLOR.primary}
            min={0}
            max={50000000}
            initialFromValue={fromValue}
            initialToValue={toValue}
            fromValueOnChange={value => setFromValue(value)}
            toValueOnChange={value => setToValue(value)}
            showValueLabels={false}
            showRangeLabels={false}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 16, color: COLOR.black}}>
            Giá từ {fromValue.toLocaleString()} đ
          </Text>
          <Text style={{fontSize: 16, color: COLOR.black}}>
            Giá từ {toValue.toLocaleString()} đ
          </Text>
        </View>
      </View>
      <View
        style={{
          paddingHorizontal: 20,
          width: '100%',
          position: 'absolute',
          bottom: 50,
        }}>
        <TouchableOpacity
          onPress={applyFilter}
          style={{
            borderRadius: 10,
            width: '100%',
            padding: 15,
            backgroundColor: COLOR.third,
          }}>
          <Text
            style={{
              fontSize: 22,
              textAlign: 'center',
              fontWeight: 'bold',
              color: COLOR.second,
            }}>
            Áp dụng
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FilterScreen;
