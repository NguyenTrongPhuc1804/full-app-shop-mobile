import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {
  Dimensions,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {COLOR} from '../../constant/color';
const {width} = Dimensions.get('window');
export default function SkeletonCategorySpecial() {
  return (
    <SkeletonPlaceholder borderRadius={4} backgroundColor={COLOR.primary}>
      <Text
        style={{
          fontSize: 18,
          fontWeight: 'bold',
          marginBottom: 10,
          color: COLOR.black,
        }}></Text>
      <View style={{flexDirection: 'row', paddingHorizontal: 10}}>
        <TouchableOpacity
          style={{
            marginBottom: 10,
            width: 300,
            backgroundColor: COLOR.second,
            flexDirection: 'row',
            marginRight: 10,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
            borderRadius: 10,
            marginRight: 10,
          }}>
          <View
            style={{
              flex: 1.5,
              borderRadius: 10,
            }}
          />
          <View
            style={{
              flex: 2,
              paddingLeft: 10,
              justifyContent: 'center',
              color: COLOR.black,
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                marginBottom: 6,
                color: COLOR.black,
              }}
              numberOfLines={1}></Text>
            <Text
              style={{
                textAlign: 'left',
                fontSize: 16,
                marginBottom: 6,
                color: COLOR.black,
              }}
              numberOfLines={1}></Text>
            <Text numberOfLines={1}></Text>

            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: 'red',
                marginBottom: 6,
              }}
              numberOfLines={1}></Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: 'red',
                marginBottom: 6,
              }}
              numberOfLines={1}></Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginBottom: 10,
            width: 300,
            backgroundColor: COLOR.second,
            flexDirection: 'row',
            marginRight: 10,
          }}>
          <View
            style={{
              flex: 1.5,
              borderRadius: 10,
            }}
          />
          <View
            style={{
              flex: 2,
              paddingLeft: 10,
              justifyContent: 'center',
              color: COLOR.black,
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                marginBottom: 6,
                color: COLOR.black,
              }}
              numberOfLines={1}></Text>
            <Text
              style={{
                textAlign: 'left',
                fontSize: 16,
                marginBottom: 6,
                color: COLOR.black,
              }}
              numberOfLines={1}></Text>
            <Text numberOfLines={1}></Text>

            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: 'red',
                marginBottom: 6,
              }}
              numberOfLines={1}></Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: 'red',
                marginBottom: 6,
              }}
              numberOfLines={1}></Text>
          </View>
        </TouchableOpacity>
      </View>
    </SkeletonPlaceholder>
  );
}
