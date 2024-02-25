import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {WebView} from 'react-native-webview';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import InputCus from '../components/Input/InputCus';
import {COLOR} from '../constant/color';
import {showNoti, showToast} from '../toolkit/helper';
import {registerUser} from '../redux/slices/authSlice';
import LoadingCus from '../components/LoadingCus';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
const {width, height} = Dimensions.get('window');
const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigation();

  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
  });
  const [loading, setLoading] = useState(false);
  const handleSubmit = () => {
    if (
      userInfo.email.trim() === '' ||
      userInfo.password.trim() === '' ||
      userInfo.name.trim() === '' ||
      userInfo.phone.trim() === '' ||
      userInfo.address.trim() === ''
    ) {
      showToast('danger', 'Vui lòng không bỏ trống các trường thông tin');
      return;
    }
    setLoading(true);
    dispatch(registerUser(userInfo))
      .then(res => {
        setLoading(false);
        if (!res.error) {
          navigate.goBack();
          showNoti('Đăng ký thành công', 'success');
        } else {
          showNoti('Có lỗi xảy ra', 'error');
        }
      })
      .catch(err => {
        console.log(err, 'err');
      });
  };
  if (loading) {
    return <LoadingCus />;
  }
  return (
    // <WebView
    //   source={{uri: 'https://apiforlearning.zendvn.com/users/create'}}
    //   style={{flex: 1}}
    // />

    <View>
      <SafeAreaView>
        <KeyboardAwareScrollView>
          <View
            style={{
              backgroundColor: COLOR.primary,
              flexDirection: 'column',
              justifyContent: 'center',
              width: width,
              height: height,
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: 700,
                fontSize: 30,
                color: COLOR.black,
                marginBottom: 26,
              }}>
              Đăng ký tài khoản
            </Text>
            <View style={{paddingHorizontal: 20}}>
              <InputCus
                placeholder={'Name'}
                title={'Họ và tên'}
                onChange={name => setUserInfo({...userInfo, name})}
              />
              <InputCus
                placeholder={'Email'}
                title={'Email'}
                onChange={email => setUserInfo({...userInfo, email})}
              />
              <InputCus
                password
                placeholder={'Password'}
                title={'Mật khẩu'}
                onChange={password => setUserInfo({...userInfo, password})}
              />
              <InputCus
                placeholder={'Phone'}
                title={'Số điện thoại'}
                onChange={phone => setUserInfo({...userInfo, phone})}
              />
              <InputCus
                placeholder={'Address'}
                title={'Địa chỉ'}
                onChange={address => setUserInfo({...userInfo, address})}
              />
              <TouchableOpacity
                onPress={handleSubmit}
                style={{
                  borderRadius: 10,
                  width: '100%',
                  backgroundColor: COLOR.third,
                  paddingVertical: 15,
                  paddingHorizontal: 20,
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 3,
                  },
                  shadowOpacity: 0.27,
                  shadowRadius: 4.65,

                  elevation: 6,
                  marginBottom: 29,
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 600,
                    color: COLOR.second,
                    textAlign: 'center',
                  }}>
                  Đăng ký
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Register;
