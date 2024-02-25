import {Alert, Text, TouchableOpacity, View, Keyboard} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Header from '../components/Header';
import HomeScreen from '../screen/HomeScreen';
import CategoryScreen from '../screen/CategoryScreen';
import FavoriteScreen from '../screen/FavoriteScreen';
import InfoScreen from '../screen/Info/InfoScreen';
import {COLOR} from '../constant/color';
import {useDispatch, useSelector} from 'react-redux';
import {removeFavorite} from '../redux/slices/favoriteSlice';
import HomeNavigation from './HomeNavigation';
import {setActiveDrawer} from '../redux/slices/categorySlice';
import CartScreen from '../screen/CartScreen';

const Tab = createBottomTabNavigator();

const MyTab = () => {
  const navigate = useNavigation();
  const dispatch = useDispatch();

  const {favoriteItem} = useSelector(state => state.favoriteSlice);
  const {cart, sum} = useSelector(state => state.cartSlice);
  const {isLogin, userToken} = useSelector(state => state.authSlice);
  const [hideTBottomBar, setHideBottomBar] = useState(15);
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      event => {
        setHideBottomBar(0);
      },
    );

    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        console.log('Keyboard did hide');
        setHideBottomBar(15);
      },
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);
  return (
    <Tab.Navigator
      initialRouteName="Trang chủ"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          switch (route.name) {
            case 'Trang chủ': {
              iconName = focused ? 'home' : 'home-outline';
              break;
            }
            case 'Cửa hàng': {
              iconName = focused ? 'cart' : 'cart-outline';
              break;
            }
            case 'Yêu thích': {
              iconName = focused ? 'heart' : 'heart-outline';
              break;
            }
            case 'Thông tin': {
              iconName = focused ? 'person' : 'person-outline';
              break;
            }
            case 'Giỏ hàng': {
              iconName = focused ? 'bag-handle' : 'bag-handle-outline';
              break;
            }
          }

          // You can return any component that you like here!

          return (
            <View
              style={{
                backgroundColor: focused ? COLOR.third : '#EAE7B1',
                borderRadius: 50,
                padding: 10,
              }}>
              <Text>
                <Ionicons name={iconName} size={24} color={color} />
              </Text>
              {route.name === 'Giỏ hàng' && cart.length > 0 ? (
                <Text
                  style={{
                    position: 'absolute',
                    color: 'white',
                    right: 0,
                    top: 0,
                    backgroundColor: 'red',
                    borderRadius: 50,
                    paddingHorizontal: 6,
                    paddingVertical: 1,
                    fontSize: 12,
                  }}>
                  {sum}
                </Text>
              ) : (
                ''
              )}
            </View>
          );
        },
        tabBarActiveTintColor: COLOR.primary,
        tabBarInactiveTintColor: 'gray',
        tabBarHideOnKeyboard: true,

        tabBarStyle: {
          display: 'flex',
          position: 'absolute',
          bottom: hideTBottomBar,
          left: 20,
          right: 20,
          elevation: 5,
          backgroundColor: '#EAE7B1',
          borderRadius: 30,
          height: 60,
        },
        tabBarLabelStyle: {fontSize: 12},
        tabBarShowLabel: false,
      })}>
      <Tab.Screen
        name="Trang chủ"
        component={HomeNavigation}
        listeners={{
          tabPress: e => {
            dispatch(setActiveDrawer('Trang chủ'));
          },
        }}
        options={{
          headerTitleAlign: 'left',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Cửa hàng"
        component={CategoryScreen}
        listeners={{
          tabPress: e => {
            dispatch(setActiveDrawer('Cửa hàng'));
          },
        }}
        options={{
          headerTitleAlign: 'center',
          header: () => (
            <Header
              title="Cửa hàng"
              icon="filter"
              onPress={() => {
                navigate.navigate('FilterScreen');
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Giỏ hàng"
        component={CartScreen}
        listeners={{
          tabPress: e => {
            dispatch(setActiveDrawer('Trang chủ'));
          },
        }}
        options={{
          headerShown: true,
          header: () => {
            return (
              <Header
                title="Giỏ hàng"
                icon="filter"
                onPress={() => {
                  navigate.navigate('FilterScreen');
                }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Yêu thích"
        component={FavoriteScreen}
        listeners={{
          tabPress: e => {
            dispatch(setActiveDrawer('Yêu thích'));
          },
        }}
        options={{
          headerTitleAlign: 'center',
          header: () => (
            <Header
              title="Yêu thích"
              icon="trash"
              onPress={() => {
                if (favoriteItem.length !== 0) {
                  Alert.alert('Thông báo', 'Bạn có chắc chắn xóa tất cả ?', [
                    {
                      text: 'Cancel',
                      onPress: () => {},
                      style: 'cancel',
                    },
                    {text: 'OK', onPress: () => dispatch(removeFavorite())},
                  ]);
                } else {
                  Alert.alert(
                    'Thông báo',
                    'Bạn chưa có sản phẩm yêu thích nào',
                    [{text: 'OK', onPress: () => dispatch(removeFavorite())}],
                  );
                }
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Thông tin"
        component={InfoScreen}
        listeners={{
          tabPress: e => {
            dispatch(setActiveDrawer('Thông tin'));
          },
        }}
        options={{
          headerTitleAlign: 'center',
          header: () => (
            <Header
              icon={isLogin ? 'person-outline' : 'login'}
              title="Thông tin"
              onPress={() => {
                isLogin
                  ? navigate.navigate('InfoShip')
                  : navigate.navigate('Login');
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MyTab;
