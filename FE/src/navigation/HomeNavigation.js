import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screen/HomeScreen';
import {COLOR} from '../constant/color';
import ProductInCategoryScreen from '../screen/ProductInCategoryScreen';
import Header from '../components/Header';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import IconHeader from '../components/IconHeader';
import CartScreen from '../screen/CartScreen';

const Stack = createStackNavigator();
const HomeNavigation = () => {
  const navigate = useNavigation();
  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Giỏ hàng',
          headerTintColor: COLOR.primary,
          header: () => (
            <Header
              title="Trang chủ"
              onPress={() => {
                navigate.navigate('CartScreen');
              }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          headerShown: true,
          title: 'Giỏ hàng',
          headerTintColor: COLOR.second,
        }}
      />
      <Stack.Screen
        name="ProductInCategoryScreen"
        component={ProductInCategoryScreen}
        options={({route}) => ({
          headerShown: true,
          title: `Danh mục ${route.params.name}`,
          headerTintColor: COLOR.second,
          headerTitleAlign: 'center',
          headerRight: () => (
            <View style={{marginRight: 10}}>
              <Text>
                <IconHeader
                  name={'filter'}
                  onPress={() => {
                    navigate.navigate('FilterScreen');
                  }}
                />
              </Text>
            </View>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
