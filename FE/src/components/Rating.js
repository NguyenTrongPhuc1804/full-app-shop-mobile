import React from 'react';
import {Rating, AirbnbRating} from 'react-native-ratings';
import {View} from 'react-native';
import {COLOR} from '../constant/color';
const RatingCus = ({color, rating}) => {
  const ratingCompleted = rating => {
    console.log('Rating is: ' + rating);
  };
  return (
    <Rating
      type="custom"
      imageSize={20}
      startingValue={rating}
      ratingCount={4}
      tintColor={color}
      onFinishRating={ratingCompleted}
    />
  );
};

export default RatingCus;
