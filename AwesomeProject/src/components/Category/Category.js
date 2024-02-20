import {View, Text} from 'react-native';
import React from 'react';
import {FlatList, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {COLOR} from '../../constant/color';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getCategory} from '../../redux/slices/categorySlice';
import SkeletonCategory from '../../common/skeleton/SeletonCategoty';

const Category = ({}) => {
  const navigate = useNavigation();
  const dispatch = useDispatch();
  const {category, isLoading} = useSelector(state => state.categorySlice);
  const listSlide = [
    {
      id: 1,
      image:
        'https://i.pinimg.com/564x/05/38/a2/0538a2166b0ee8ba45e5ffb38aceb8c8.jpg',
      name: 'Iphone',
    },
    {
      id: 2,
      image:
        'https://i.pinimg.com/564x/f8/e3/4a/f8e34a4763987dcab1c15888cb0830d0.jpg',
      name: 'Samsung',
    },
    {
      id: 3,

      image:
        'https://i.pinimg.com/564x/8e/c8/08/8ec808a308cde6ab839ca0d08e6110d2.jpg',
      name: 'Sony',
    },
    {
      id: 4,
      image:
        'https://i.pinimg.com/564x/33/09/3a/33093a1e11e88cbf72bad8e6de8e6a3f.jpg',
      name: 'Oppo',
    },
  ];
  useEffect(() => {
    dispatch(getCategory());
  }, []);
  if (isLoading) {
    return <SkeletonCategory />;
  } else {
    return (
      <View style={{marginTop: 20}}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            marginBottom: 10,
            color: COLOR.second,
          }}>
          Tất cả danh mục
        </Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={listSlide}
          contentContainerStyle={{paddingHorizontal: 10}}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => {
                navigate.navigate('ProductInCategoryScreen', {
                  id: item.id,
                  name: item.name,
                });
              }}
              style={{
                marginRight: 8,
                borderRadius: 50,
                marginBottom: 10,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: COLOR.primary,
                padding: 10,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 3,
                },
                shadowOpacity: 0.27,
                shadowRadius: 4.65,

                elevation: 6,
              }}>
              <View style={{width: 30, height: 30}}>
                <Image
                  style={{
                    resizeMode: 'contain',
                    width: '100%',
                    height: '100%',
                    borderRadius: 50,
                  }}
                  source={{uri: item.image}}
                />
              </View>
              <Text
                style={{
                  marginLeft: 10,
                  textAlign: 'center',
                  fontSize: 14,
                  fontWeight: '600',
                  color: COLOR.second,
                }}>
                {item.name}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
};

export default Category;
