import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import React from 'react';
import InputCus from '../components/Input/InputCus';
import CartProduct from '../components/CardProduct/CartProduct';
import {COLOR} from '../constant/color';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {removeAllCart, sumTotalCart} from '../redux/slices/cartSlice';
import {saveCart} from '../redux/slices/buySlice';
import {Button, Dialog, CheckBox, ListItem, Avatar} from '@rneui/themed';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {showNoti} from '../toolkit/helper';
const BuyScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigation();
  const {cart, totalCart} = useSelector(state => state.cartSlice);
  const {isLogin} = useSelector(state => state.authSlice);
  const {bill} = useSelector(state => state.buySlice);
  const [visible, setVisible] = useState(false);
  const toggleDialog = () => {
    setVisible(!visible);
  };
  const handleBuySuccess = () => {
    navigate.navigate('Trang chủ');
    dispatch(removeAllCart());
  };
  const handleSaveCart = async () => {
    if (isLogin) {
      const newData = await cart.map(item => ({
        product_id: item.id,
        quantity: item.quantity,
      }));
      dispatch(saveCart({data: newData})).then(res => {
        if (res.payload) {
          toggleDialog(true);
        } else {
          showNoti('Vui lòng đăng nhập để có thể mua hàng', 'error');
        }
      });
    } else {
      showNoti('Vui lòng đăng nhập để có thể mua hàng', 'error');
    }
  };
  useEffect(() => {
    dispatch(sumTotalCart());
  }, [cart]);

  return (
    <View style={{width: '100%', height: '100%'}}>
      <View style={{height: '45%', padding: 10, borderBottomWidth: 1}}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={cart}
          renderItem={({item}) => (
            <CartProduct item={item} detail={180} total />
          )}
          keyExtractor={item => item.id}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 10,
        }}>
        <Text style={styles.text}>Tổng đơn hàng :</Text>
        <Text style={styles.text}>{totalCart.toLocaleString()} đ</Text>
      </View>
      <View style={{paddingHorizontal: 30, marginTop: 20}}>
        <View>
          <InputCus
            title={'Mã giảm giá (nếu có)'}
            placeholder={'Mã giảm giá'}
            editable={false}
          />
        </View>
        <View>
          <InputCus
            title={'Phí vận chuyển'}
            placeholder={'15.000 đ'}
            editable={false}
          />
        </View>
      </View>
      <View
        style={{
          width: '100%',
          bottom: 10,
          position: 'absolute',
          paddingHorizontal: 30,
        }}>
        <TouchableOpacity
          onPress={handleSaveCart}
          style={{padding: 10, backgroundColor: COLOR.third, borderRadius: 10}}>
          <Text
            style={{
              color: 'white',
              fontSize: 22,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            Mua hàng
          </Text>
        </TouchableOpacity>
      </View>
      <Dialog isVisible={visible} onBackdropPress={toggleDialog}>
        <Text
          style={{
            color: 'green',
            fontSize: 18,
            fontWeight: 'bold',
            marginBottom: 10,
          }}>
          Mua hàng thành công
        </Text>
        <Text style={{fontSize: 16, color: COLOR.black}}>
          Mã đơn hàng của bạn là :
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 16, color: COLOR.black}}>{bill?.code}</Text>
          <TouchableOpacity
            onPress={() => {
              Clipboard.setString(bill?.code);
              showNoti('Đã copy mã đơn hàng vào bộ nhớ đệm');
            }}
            style={{
              backgroundColor: COLOR.third,
              alignItems: 'center',
              padding: 5,
              marginLeft: 5,
              borderRadius: 5,
              justifyContent: 'center',
            }}>
            <Text style={{color: COLOR.second}}>sao chép</Text>
          </TouchableOpacity>
        </View>
        <Text style={{fontSize: 16, color: COLOR.black}}>
          Tổng hóa đơn bạn là : {bill?.amount?.toLocaleString()} đ
        </Text>
        <Dialog.Actions>
          <Dialog.Button title="Xác nhận" onPress={handleBuySuccess} />
        </Dialog.Actions>
      </Dialog>
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLOR.black,
  },
  label: {
    color: 'red',
  },
});
export default BuyScreen;
