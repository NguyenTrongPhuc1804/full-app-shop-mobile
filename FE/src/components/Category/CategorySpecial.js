import {View, Text} from 'react-native';
import React from 'react';
import {FlatList, Image, TouchableOpacity} from 'react-native';
import RatingCus from '../Rating';
import {useNavigation} from '@react-navigation/native';
import CheckCart from '../CheckCart/CheckCart';
import {COLOR} from '../../constant/color';
import SkeletonCategorySpecial from '../../common/skeleton/SkeletonCategorySpecial';

const CategorySpecial = ({listProduct, title, isSkeleton}) => {
  if (isSkeleton) {
    return <SkeletonCategorySpecial />;
  } else {
    return (
      <View style={{marginTop: 10}}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            marginBottom: 10,
            color: COLOR.second,
          }}>
          {title}
        </Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={listProduct}
          contentContainerStyle={{paddingHorizontal: 10}}
          renderItem={({item}) => <CheckCart item={item} />}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
};

export default CategorySpecial;
