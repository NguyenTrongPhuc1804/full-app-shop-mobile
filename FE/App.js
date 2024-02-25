/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MainScreen from './src/navigation/MainScreen';
import DrawerScreen from './src/screen/DrawerScreen';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import FlashMessage from 'react-native-flash-message';
import {PersistGate} from 'redux-persist/integration/react';
import persistStore from 'redux-persist/es/persistStore';
import {RootSiblingParent} from 'react-native-root-siblings';
const Drawer = createDrawerNavigator();
function App() {
  let persistor = persistStore(store);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootSiblingParent>
          <NavigationContainer>
            <Drawer.Navigator
              screenOptions={{headerShown: false}}
              initialRouteName="main"
              drawerContent={props => <DrawerScreen {...props} />}>
              <Drawer.Screen name="main" component={MainScreen} />
            </Drawer.Navigator>
            <FlashMessage position="top" />
          </NavigationContainer>
        </RootSiblingParent>
      </PersistGate>
    </Provider>
  );
}

export default App;
