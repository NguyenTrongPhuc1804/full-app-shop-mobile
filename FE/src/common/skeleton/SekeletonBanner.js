import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {Dimensions, View, Text, Image} from 'react-native';
import {COLOR} from '../../constant/color';
const {width} = Dimensions.get('window');
export default function SkeletonBanner() {
  return (
    <SkeletonPlaceholder borderRadius={4} backgroundColor={COLOR.primary}>
      <View
        style={{
          width: width,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View style={{width: width / 1.1, height: 200, borderRadius: 10}} />
      </View>
    </SkeletonPlaceholder>
  );
}
