import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {COLOR} from '../constant/color';
import {useDispatch, useSelector} from 'react-redux';
import {getSingleProduct} from '../redux/slices/productSlice';
import {useEffect} from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const CardBottomSheetHistory = ({item}) => {
  const dispatch = useDispatch();
  // const {productDetail} = useSelector(state => state.productSlice);
  const [productDetail, setProductDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const newProduct = {...productDetail, quantity: item.quantity};

  useEffect(() => {
    dispatch(getSingleProduct(item?.product_id)).then(res => {
      setProductDetail(res.payload);
      setLoading(false);
    });
  }, []);
  if (loading) {
    return (
      <SkeletonPlaceholder borderRadius={4} backgroundColor={COLOR.primary}>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 10,
          }}>
          <View style={{width: '100%', height: 100, borderRadius: 10}} />
        </View>
      </SkeletonPlaceholder>
    );
  }
  return (
    <TouchableOpacity
      onPress={() => {
        navigate.navigate('ProductDetail', {id: item.id});
      }}
      style={{
        marginBottom: 10,
        width: '100%',
        backgroundColor: COLOR.second,
        flexDirection: 'row',
        padding: 10,
        backgroundColor: '#508D69',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
        borderRadius: 10,
        marginRight: 10,
      }}>
      <Image
        resizeMode="contain"
        style={{
          flex: 1.5,
          borderRadius: 10,
        }}
        source={{uri: newProduct.image}}
      />
      <View
        style={{
          flex: 2,
          paddingLeft: 10,
          justifyContent: 'center',
          color: COLOR.second,
        }}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: 'bold',
            marginBottom: 6,
            color: COLOR.second,
          }}
          numberOfLines={1}>
          {newProduct.name}
        </Text>
        <Text
          style={{
            textAlign: 'left',
            fontSize: 12,
            marginBottom: 6,
            color: COLOR.second,
          }}
          numberOfLines={1}>
          {newProduct.summary}
        </Text>
        <Text
          style={{
            textAlign: 'left',
            fontSize: 12,
            marginBottom: 6,
            color: COLOR.second,
          }}>
          Số lượng: {newProduct?.quantity}
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: 'bold',
            color: '#9ADE7B',
            marginBottom: 6,
          }}
          numberOfLines={1}>
          {newProduct?.price?.toLocaleString()}đ
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CardBottomSheetHistory;
