import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MyTab from './MyTab';
import InfoShip from '../screen/Info/InfoShip';
import {COLOR} from '../constant/color';
import {View, Text, Dimensions, TouchableOpacity} from 'react-native';
import BoxSearch from '../components/BoxSearch';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProductDetail from '../screen/ProductDetail';
import InfoCart from '../screen/Info/InfoCart';
import FilterScreen from '../screen/FilterScreen';
import CartScreen from '../screen/CartScreen';
import BuyScreen from '../screen/BuyScreen';
import Login from '../screen/Login';
import {logout} from '../redux/slices/authSlice';
import SearchScreen from '../screen/SearchScreen';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import Register from '../screen/Register';
import HistoryScreen from '../screen/HistoryScreen';
const Stack = createStackNavigator();
const MainScreen = () => {
  const navigate = useNavigation();
  const dispatch = useDispatch();
  const {cart, sum} = useSelector(state => state.cartSlice);
  useEffect(() => {}, [cart]);
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="MyTab" component={MyTab} options={{}} />
      <Stack.Screen
        name="InfoShip"
        component={InfoShip}
        options={{
          headerShown: true,
          title: 'Thông tin người dùng',
          headerTintColor: COLOR.second,
          headerTitleAlign: 'center',
          headerTitle: () => (
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingRight: 10,
              }}>
              <BoxSearch />
              <TouchableOpacity
                onPress={() => {
                  dispatch(logout());
                  navigate.navigate('HomeScreen');
                }}>
                <Ionicons name={'log-out'} size={28} color={COLOR.primary} />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="InfoCart"
        component={InfoCart}
        options={{
          headerShown: true,
          title: 'Thông tin giao hàng',
          headerTintColor: COLOR.second,
          headerTitleAlign: 'center',
          headerTitle: () => (
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingRight: 10,
              }}>
              <BoxSearch />
              <TouchableOpacity>
                <Ionicons
                  name={'cart-outline'}
                  size={32}
                  color={COLOR.primary}
                />
              </TouchableOpacity>
            </View>
          ),
          headerRight: () => <View style={{}}></View>,
        }}
      />
      <Stack.Screen
        name="HistoryScreen"
        component={HistoryScreen}
        options={{
          headerShown: true,
          title: 'Lịch sử mua hàng',
          headerTintColor: COLOR.second,
          headerTitleAlign: 'center',
          headerTitle: () => (
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingRight: 10,
              }}>
              <BoxSearch />
              <TouchableOpacity>
                <Ionicons
                  name={'cart-outline'}
                  size={32}
                  color={COLOR.primary}
                />
              </TouchableOpacity>
            </View>
          ),
          headerRight: () => <View style={{}}></View>,
        }}
      />
      <Stack.Screen
        name="FilterScreen"
        component={FilterScreen}
        options={{
          headerShown: true,
          title: 'Thông tin giao hàng',
          headerTintColor: COLOR.primary,
          headerTitleAlign: 'center',
          headerTitle: () => (
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingRight: 10,
              }}>
              <BoxSearch />
              <TouchableOpacity>
                <Ionicons
                  name={'cart-outline'}
                  size={32}
                  color={COLOR.primary}
                />
              </TouchableOpacity>
            </View>
          ),
          headerRight: () => <View style={{}}></View>,
        }}
      />
      {/* <Stack.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          headerShown: true,
          title: 'Giỏ hàng',
          headerTintColor: COLOR.primary,
        }}
      /> */}
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
          title: 'Giỏ hàng',
          headerTintColor: COLOR.primary,
        }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          headerShown: false,
          title: 'Giỏ hàng',
          headerTintColor: COLOR.primary,
        }}
      />
      <Stack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          headerShown: true,
          title: 'Giỏ hàng',
          headerTintColor: COLOR.primary,
          headerTitle: () => (
            <View
              style={{
                marginLeft: -30,
                width: 340,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <BoxSearch />
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="BuyScreen"
        component={BuyScreen}
        options={{
          headerShown: true,
          title: 'Xác nhận đơn hàng',
          headerTintColor: COLOR.second,
        }}
      />

      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={{
          headerShown: true,
          headerTintColor: COLOR.second,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: COLOR.primary,
            elevation: 0,
            shadowOpacity: 0,
          },
          headerTitle: () => (
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingRight: 10,
              }}>
              <BoxSearch />
              <TouchableOpacity
                onPress={() => {
                  navigate.navigate('CartScreen');
                }}>
                <Ionicons
                  name={'cart-outline'}
                  size={32}
                  color={COLOR.second}
                />
                {cart.length > 0 && (
                  <Text
                    style={{
                      position: 'absolute',
                      color: 'white',
                      right: -5,
                      top: -5,
                      backgroundColor: 'red',
                      borderRadius: 50,
                      paddingHorizontal: 6,
                      paddingVertical: 1,
                      fontSize: 12,
                    }}>
                    {sum}
                  </Text>
                )}
              </TouchableOpacity>
            </View>
          ),
          headerRight: () => <View style={{}}></View>,
        }}
      />
    </Stack.Navigator>
  );
};

export default MainScreen;
