import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import IconHeader from './IconHeader';
import BoxSearch from './BoxSearch';
import {COLOR} from '../constant/color';

const Header = ({icon, title, onPress}) => {
  let iconRight = 'cart';
  switch (icon) {
    case 'sort':
      iconRight = 'sort';
      break;
    case 'trash':
      iconRight = 'trash-bin-outline';
      break;
    case 'person-outline':
      iconRight = 'person';
      break;
    case 'filter':
      iconRight = 'filter';
      break;
    case 'login':
      iconRight = 'log-in';
      break;
    default:
      break;
  }
  return (
    <View
      style={{width: '100%', paddingTop: 15, backgroundColor: COLOR.primary}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
          }}>
          <IconHeader name={'menu'} />
          <Text
            style={{
              fontSize: 22,
              color: COLOR.second,
              fontWeight: '600',
              marginLeft: 20,
            }}>
            {title}
          </Text>
        </View>
        <IconHeader name={iconRight} onPress={onPress} />
      </View>
      <View>
        <BoxSearch />
      </View>
    </View>
  );
};

export default Header;
