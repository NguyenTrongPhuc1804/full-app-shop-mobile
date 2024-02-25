import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import InputCus from '../../components/Input/InputCus';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getInfoUser, updateInfoUser} from '../../redux/slices/userSlice';
import LoadingCus from '../../components/LoadingCus';
import {COLOR} from '../../constant/color';
import {useNavigation} from '@react-navigation/native';
import {showNoti, showToast} from '../../toolkit/helper';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const InfoShip = () => {
  const dispatch = useDispatch();
  const navigate = useNavigation();
  const {user} = useSelector(state => state.userSlice);
  const {userToken} = useSelector(state => state.authSlice);
  const [loading, setLoading] = useState(true);
  const [isUpdate, setIsUpdate] = useState(true);
  const [userOj, setUserOj] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });
  console.log(user, 'user');
  const handleUpdateInfo = () => {
    dispatch(updateInfoUser(userOj)).then(res => {
      if (!res.error) {
        setIsUpdate(!isUpdate);
        // showToast('success', 'cập nhật thông tin thành công');
        showNoti('cập nhật thông tin thành công', 'success');
      } else {
        console.log(res);
        alert('error');
        showNoti('cập nhật thông tin thành công', 'error');
      }
    });
  };
  useEffect(() => {
    dispatch(getInfoUser()).then(res => {
      if (!res.error) {
        setLoading(false);
        setUserOj({
          name: res.payload.name,
          email: res.payload.email,
          phone: res.payload.phone,
          address: res.payload.address,
        });
      } else {
        setLoading(false);
        console.log(res);
        alert('error');
      }
    });
  }, [isUpdate]);
  if (loading) {
    return <LoadingCus />;
  } else {
    return (
      <View style={{paddingHorizontal: 20, marginTop: 20}}>
        <Text
          style={{
            color: COLOR.black,
            fontSize: 22,
            fontWeight: 'bold',
            marginBottom: 20,
            textAlign: 'center',
          }}>
          Thông tin người dùng
        </Text>
        <KeyboardAwareScrollView>
          <InputCus
            value={userOj?.name}
            title="Họ tên"
            placeholder={'Họ tên'}
            onChange={value => setUserOj({...userOj, name: value})}
          />
          <InputCus
            value={userOj?.email}
            title="Email"
            placeholder={'Email'}
            onChange={value => setUserOj({...userOj, email: value})}
          />
          <InputCus
            value={userOj?.phone}
            title="Số điện thoại"
            placeholder={'Số điện thoại'}
            onChange={value => setUserOj({...userOj, phone: value})}
          />
          <InputCus
            value={userOj?.address}
            title="Địa chỉ"
            placeholder={'Địa chỉ'}
            onChange={value => setUserOj({...userOj, address: value})}
          />

          <TouchableOpacity
            onPress={handleUpdateInfo}
            style={{
              backgroundColor: COLOR.third,
              padding: 15,
              borderRadius: 10,
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 16,
                color: COLOR.second,
                fontWeight: 'bold',
              }}>
              Cập nhật thông tin
            </Text>
          </TouchableOpacity>
        </KeyboardAwareScrollView>
      </View>
    );
  }
};

export default InfoShip;
