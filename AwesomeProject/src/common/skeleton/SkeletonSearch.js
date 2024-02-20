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
export default function SkeletonSearch() {
  return (
    <SkeletonPlaceholder borderRadius={4}>
      <View
        style={{
          width: width,
          height: 20,
          marginTop: 20,
          paddingHorizontal: 20,
        }}></View>
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
            <View style={{}}>
              {/* <Text
                numberOfLines={1}
                style={{
                  fontWeight: 'bold',
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: COLOR.black,
                }}></Text>
              <Text
                numberOfLines={1}
                style={{
                  fontSize: 16,
                  color: COLOR.black,
                }}></Text>
              <Text
                numberOfLines={1}
                style={{
                  textDecorationLine: 'line-through',
                  fontSize: 16,
                  color: '#333',
                }}></Text>
              <Text
                numberOfLines={1}
                style={{
                  fontWeight: 'bold',
                  color: 'red',
                  fontSize: 16,
                }}></Text> */}
            </View>
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
              backgroundColor: 'white',
              borderRadius: 10,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}>
            <View style={{width: '100%', flex: 1, alignItems: 'center'}}>
              <View
                resizeMode="contain"
                style={{width: '100%', height: '100%'}}
              />
            </View>
            <View style={{}}>
              <Text
                numberOfLines={1}
                style={{
                  fontWeight: 'bold',
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: COLOR.black,
                }}></Text>
              <Text
                numberOfLines={1}
                style={{
                  fontSize: 16,
                  color: COLOR.black,
                }}></Text>
              <Text
                numberOfLines={1}
                style={{
                  textDecorationLine: 'line-through',
                  fontSize: 16,
                  color: '#333',
                }}></Text>
              <Text
                numberOfLines={1}
                style={{
                  fontWeight: 'bold',
                  color: 'red',
                  fontSize: 16,
                }}></Text>
            </View>
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
              backgroundColor: 'white',
              borderRadius: 10,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}>
            <View style={{width: '100%', flex: 1, alignItems: 'center'}}>
              <View
                resizeMode="contain"
                style={{width: '100%', height: '100%'}}
              />
            </View>
            <View style={{}}>
              <Text
                numberOfLines={1}
                style={{
                  fontWeight: 'bold',
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: COLOR.black,
                }}></Text>
              <Text
                numberOfLines={1}
                style={{
                  fontSize: 16,
                  color: COLOR.black,
                }}></Text>
              <Text
                numberOfLines={1}
                style={{
                  textDecorationLine: 'line-through',
                  fontSize: 16,
                  color: '#333',
                }}></Text>
              <Text
                numberOfLines={1}
                style={{
                  fontWeight: 'bold',
                  color: 'red',
                  fontSize: 16,
                }}></Text>
            </View>
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
              backgroundColor: 'white',
              borderRadius: 10,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}>
            <View style={{width: '100%', flex: 1, alignItems: 'center'}}>
              <View
                resizeMode="contain"
                style={{width: '100%', height: '100%'}}
              />
            </View>
            <View style={{}}>
              <Text
                numberOfLines={1}
                style={{
                  fontWeight: 'bold',
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: COLOR.black,
                }}></Text>
              <Text
                numberOfLines={1}
                style={{
                  fontSize: 16,
                  color: COLOR.black,
                }}></Text>
              <Text
                numberOfLines={1}
                style={{
                  textDecorationLine: 'line-through',
                  fontSize: 16,
                  color: '#333',
                }}></Text>
              <Text
                numberOfLines={1}
                style={{
                  fontWeight: 'bold',
                  color: 'red',
                  fontSize: 16,
                }}></Text>
            </View>
          </View>
        </View>
      </View>
    </SkeletonPlaceholder>
  );
}
