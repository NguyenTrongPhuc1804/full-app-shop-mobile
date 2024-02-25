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
export default function SkeletonCategory() {
  return (
    <SkeletonPlaceholder borderRadius={4} backgroundColor={COLOR.primary}>
      <View style={{marginTop: 20}}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: 10,
            color: COLOR.black,
          }}>
          Tất cả danh mục
        </Text>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={{
              marginRight: 5,
              borderRadius: 20,
              flexDirection: 'column',
              padding: 5,
            }}>
            <View style={{width: 100, height: 100}}>
              <View
                style={{
                  width: '100%',
                  height: '100%',
                  marginBottom: 10,
                  borderRadius: 10,
                }}
              />
            </View>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 12,
                fontWeight: '600',
                color: COLOR.black,
              }}></Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginRight: 5,
              borderRadius: 20,
              flexDirection: 'column',
              padding: 5,
            }}>
            <View style={{width: 100, height: 100}}>
              <View
                style={{
                  width: '100%',
                  height: '100%',
                  marginBottom: 10,
                  borderRadius: 10,
                }}
              />
            </View>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 12,
                fontWeight: '600',
                color: COLOR.black,
              }}></Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginRight: 5,
              borderRadius: 20,
              flexDirection: 'column',
              padding: 5,
            }}>
            <View style={{width: 100, height: 100}}>
              <View
                style={{
                  width: '100%',
                  height: '100%',
                  marginBottom: 10,
                  borderRadius: 10,
                }}
              />
            </View>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 12,
                fontWeight: '600',
                color: COLOR.black,
              }}></Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginRight: 5,
              borderRadius: 20,
              flexDirection: 'column',
              padding: 5,
            }}>
            <View style={{width: 100, height: 100}}>
              <View
                style={{
                  width: '100%',
                  height: '100%',
                  marginBottom: 10,
                  borderRadius: 10,
                }}
              />
            </View>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 12,
                fontWeight: '600',
                color: COLOR.black,
              }}></Text>
          </TouchableOpacity>
        </View>
      </View>
    </SkeletonPlaceholder>
  );
}
