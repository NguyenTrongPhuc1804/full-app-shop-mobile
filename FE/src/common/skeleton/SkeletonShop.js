import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {
  Dimensions,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {COLOR} from '../../constant/color';
const {width} = Dimensions.get('window');
export default function SkeletonShop() {
  return (
    <SkeletonPlaceholder borderRadius={4}>
      <View
        style={{
          width: width,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View style={{width: width / 1.1, height: 200, borderRadius: 10}} />
      </View>
      <View
        horizontal={true}
        style={{
          width: '100%',
          height: '100%',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}>
        <View
          style={{
            width: '50%',
            height: 270,
            padding: 5,
          }}>
          <View
            style={{
              width: '100%',
              height: '100%',
              padding: 10,
              borderRadius: 10,
            }}>
            <View style={{width: '100%', flex: 1, alignItems: 'center'}}>
              <View
                resizeMode="contain"
                style={{width: '100%', height: '100%'}}
              />
            </View>
            <View style={{}}></View>
          </View>
        </View>
        <View
          style={{
            width: '50%',
            height: 270,
            padding: 5,
          }}>
          <View
            style={{
              width: '100%',
              height: '100%',
              padding: 10,
              borderRadius: 10,
            }}>
            <View style={{width: '100%', flex: 1, alignItems: 'center'}}>
              <View
                resizeMode="contain"
                style={{width: '100%', height: '100%'}}
              />
            </View>
            <View style={{}}></View>
          </View>
        </View>
        <View
          style={{
            width: '50%',
            height: 270,
            padding: 5,
          }}>
          <View
            style={{
              width: '100%',
              height: '100%',
              padding: 10,
              borderRadius: 10,
            }}>
            <View style={{width: '100%', flex: 1, alignItems: 'center'}}>
              <View
                resizeMode="contain"
                style={{width: '100%', height: '100%'}}
              />
            </View>
            <View style={{}}></View>
          </View>
        </View>
        <View
          style={{
            width: '50%',
            height: 270,
            padding: 5,
          }}>
          <View
            style={{
              width: '100%',
              height: '100%',
              padding: 10,
              borderRadius: 10,
            }}>
            <View style={{width: '100%', flex: 1, alignItems: 'center'}}>
              <View
                resizeMode="contain"
                style={{width: '100%', height: '100%'}}
              />
            </View>
            <View style={{}}></View>
          </View>
        </View>
      </View>
    </SkeletonPlaceholder>
  );
}
