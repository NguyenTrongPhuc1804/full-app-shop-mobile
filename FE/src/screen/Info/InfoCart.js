import {View, Text, TouchableOpacity, FlatList, ScrollView} from 'react-native';
import React from 'react';
import InputCus from '../../components/Input/InputCus';
import CheckCart from '../../components/CheckCart/CheckCart';
import ProgressBarShip from '../../components/ProgressBarShip';
import {COLOR} from '../../constant/color';
import {TextInput} from 'react-native-paper';
import {useState} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import {useDispatch, useSelector} from 'react-redux';
import {checkCode} from '../../redux/slices/buySlice';
import {useEffect} from 'react';
import CartProduct from '../../components/CardProduct/CartProduct';

const imgList = [
  {
    name: 'Iphone 15',
    ram: '8/32GB',
    price: 10000000,
    id: 1,
    img: 'https://plus.unsplash.com/premium_photo-1682309761340-3f8b1cbaa655?auto=format&fit=crop&q=80&w=1824&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Iphone 15',
    ram: '8/32GB',
    price: 1000,
    id: 2,
    img: 'https://plus.unsplash.com/premium_photo-1682309761340-3f8b1cbaa655?auto=format&fit=crop&q=80&w=1824&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Iphone 15',
    ram: '8/32GB',
    price: 1000,
    id: 3,
    img: 'https://plus.unsplash.com/premium_photo-1682309761340-3f8b1cbaa655?auto=format&fit=crop&q=80&w=1824&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Iphone 15',
    ram: '8/32GB',
    price: 1000,
    id: 4,
    img: 'https://plus.unsplash.com/premium_photo-1682309761340-3f8b1cbaa655?auto=format&fit=crop&q=80&w=1824&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Iphone 15',
    ram: '8/32GB',
    price: 1000,
    id: 5,
    img: 'https://plus.unsplash.com/premium_photo-1682309761340-3f8b1cbaa655?auto=format&fit=crop&q=80&w=1824&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];
const InfoCart = () => {
  const dispatch = useDispatch();

  const {allProduct} = useSelector(state => state.productSlice);
  const [orderItem, setOrderItem] = useState({});
  const [listOrder, setListOrder] = useState();
  const [text, setText] = useState('');

  useEffect(() => {
    let orderArr = allProduct.map(item => {
      let index = orderItem?.order_items?.find(
        order => order.product_id == item.id,
      );
      if (index) {
        return {
          id: item.id,
          image: item.image,
          name: item.name,
          rating: item.rating,
          price_sale_off: item.price_sale_off,
          quantity: index?.quantity,
          summary: item.summary,
          price: item.price,
        };
      }
    });

    setListOrder(orderArr.filter(item => item != undefined));
  }, [orderItem]);

  return (
    <ScrollView>
      <View style={{paddingHorizontal: 40, marginTop: 20}}>
        <TextInput
          label="Nhập mã đơn hàng của bạn"
          value={text}
          onChangeText={text => setText(text)}
        />
        <TouchableOpacity
          onPress={() => {
            dispatch(checkCode(text)).then(res => {
              setOrderItem(res.payload);
            });
          }}
          style={{
            padding: 10,
            backgroundColor: COLOR.third,
            marginTop: 10,
            alignItems: 'center',
            borderRadius: 5,
            flexDirection: 'row',
            justifyContent: 'center',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 8,
            },
            shadowOpacity: 0.44,
            shadowRadius: 10.32,

            elevation: 16,
          }}>
          <Entypo name="check" size={18} color={COLOR.second} />
          <Text
            style={{
              color: COLOR.second,
              textAlign: 'center',
              fontSize: 16,
              marginLeft: 5,
            }}>
            Kiểm tra đơn hàng
          </Text>
        </TouchableOpacity>
      </View>
      {listOrder?.length > 0 ? (
        <View style={{paddingHorizontal: 20, marginTop: 10}}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              marginBottom: 22,
              color: COLOR.black,
            }}>
            Đơn hàng của bạn
          </Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{height: 280}}
            data={listOrder}
            renderItem={({item}) => (
              <CartProduct item={item} cart detail={180} total />
            )}
            keyExtractor={item => item?.id}
          />
          <Text style={{fontSize: 16, color: COLOR.black, marginBottom: 10}}>
            Đơn hàng của bạn có{' '}
            {listOrder?.reduce((pre, cur) => pre + Number(cur.quantity), 0)} sản
            phẩm
          </Text>
          <Text style={{fontSize: 16, color: COLOR.black}}>
            Tổng đơn hàng của bạn là :
            {Math.floor(orderItem?.amount).toLocaleString()} đ
          </Text>
          <Text
            style={{
              fontSize: 22,
              fontWeight: 'bold',
              marginVertical: 20,
              color: COLOR.black,
            }}>
            Tình trạng đơn hàng
          </Text>
          <ProgressBarShip />
        </View>
      ) : (
        ''
      )}
    </ScrollView>
  );
};

export default InfoCart;
