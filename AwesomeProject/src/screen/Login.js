import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Dimensions,
} from 'react-native';
import React, {useContext, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import InputCus from '../components/Input/InputCus';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {COLOR} from '../constant/color';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {loginSetUser} from '../redux/slices/authSlice';
import {showNoti, showToast} from '../toolkit/helper';
import LoadingCus from '../components/LoadingCus';
import {showMessage} from 'react-native-flash-message';
import AsyncStorage from '@react-native-async-storage/async-storage';

const {width, height} = Dimensions.get('window');
const Login = () => {
  const navigate = useNavigation();
  const dispatch = useDispatch();
  const {userToken} = useSelector(state => state.authSlice);
  const [account, setAccount] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const handleSubmit = () => {
    if (account.email.trim() === '' || account.password.trim() === '') {
      showToast('danger', 'Vui lòng không bỏ trống email hoặc mật khẩu');
      return;
    }
    setLoading(true);
    dispatch(
      loginSetUser({email: account.email, password: account.password}),
    ).then(res => {
      setLoading(false);
      if (!res.error) {
        navigate.goBack();
        showNoti('Đăng nhập thành công', 'success');
      } else {
        showNoti('Sai mật khẩu hoặc email', 'error');
      }
    });
  };

  //handel focus input
  const [focus, setFocus] = useState(COLOR.grey);
  const onFocus = () => {
    setFocus(COLOR.third);
  };

  const onBlur = () => {
    setFocus(COLOR.grey);
  };
  if (loading) {
    return <LoadingCus />;
  }
  return (
    <SafeAreaView>
      <KeyboardAwareScrollView
        contentContainerStyle={{
          paddingHorizontal: 40,
          height: height,
          justifyContent: 'center',
        }}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 74,
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: 700,
              fontSize: 30,
              color: COLOR.black,
              marginBottom: 26,
            }}>
            Đăng nhập
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 600,
              textAlign: 'center',
              color: COLOR.black,
            }}>
            Chào mừng bạn đã trở lại!
          </Text>
        </View>
        <View style={{marginBottom: 20}}>
          <View style={{width: '100%'}}>
            <TextInput
              value={account.email}
              placeholder="Email"
              onChangeText={e => {
                setAccount({...account, email: e});
              }}
              placeholderTextColor={COLOR.gray}
              onFocus={() => onFocus()}
              onBlur={() => onBlur()}
              style={{
                width: '100%',
                height: 54,
                borderRadius: 10,
                borderWidth: 2,
                borderColor: focus,
                backgroundColor: '#F1F4FF',
                padding: 10,
                marginBottom: 10,
                fontSize: 16,
                color: COLOR.black,
              }}></TextInput>
          </View>
          <View style={{width: '100%'}}>
            <InputCus
              value={account.password}
              placeholder={'Mật khẩu'}
              password
              onChange={value => setAccount({...account, password: value})}
            />
          </View>
          {/* <TouchableOpacity
            onPress={() => {
              navigate.navigate('ForgotPassword');
            }}>
            <Text
              style={{
                textAlign: 'right',
                color: COLOR.primary,
                fontWeight: 700,
                marginBottom: 29,
              }}>
              Quên mật khẩu
            </Text>
          </TouchableOpacity> */}

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
              Đăng nhập
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigate.push('Register');
            }}
            style={{}}>
            <Text
              style={{
                color: COLOR.black,
                textAlign: 'center',
                fontSize: 14,
                fontWeight: 600,
              }}>
              Tạo tài khoản mới
            </Text>
          </TouchableOpacity>
        </View>
        {/* <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{marginBottom: 10}}>Đăng nhập với</Text>
          <View
            style={{
              flexDirection: 'row',
              width: 250,
              justifyContent: 'space-around',
            }}>
            <TouchableOpacity>
              <Ionicons
                name={'logo-facebook'}
                size={24}
                style={{
                  paddingHorizontal: 20,
                  paddingVertical: 10,
                  backgroundColor: '#ECECEC',
                  borderRadius: 10,
                }}
                color={'black'}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons
                name={'logo-google'}
                size={24}
                style={{
                  paddingHorizontal: 20,
                  paddingVertical: 10,
                  backgroundColor: '#ECECEC',
                  borderRadius: 10,
                }}
                color={'black'}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons
                name={'logo-apple'}
                size={24}
                style={{
                  paddingHorizontal: 20,
                  paddingVertical: 10,
                  backgroundColor: '#ECECEC',
                  borderRadius: 10,
                }}
                color={'black'}
              />
            </TouchableOpacity>
          </View>
        </View> */}
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Login;
