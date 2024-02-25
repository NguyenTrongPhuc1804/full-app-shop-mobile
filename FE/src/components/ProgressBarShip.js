import {View, Text} from 'react-native';
import React, {useState} from 'react';
import StepIndicator from 'react-native-step-indicator';
import {COLOR} from '../constant/color';
const ProgressBarShip = () => {
  const [currentPosition, setCurrentPosition] = useState(1);
  const labels = ['Xác nhận', 'Chuẩn bị', 'Giao hàng', 'Đã nhận'];
  const customStyles = {
    stepIndicatorSize: 25,
    currentStepIndicatorSize: 30,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: COLOR.primary,
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: COLOR.primary,
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: COLOR.primary,
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: COLOR.primary,
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: COLOR.primary,
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    labelColor: '#999999',
    labelSize: 13,
    currentStepLabelColor: COLOR.primary,
  };
  return (
    <View>
      <StepIndicator
        customStyles={customStyles}
        currentPosition={currentPosition}
        labels={labels}
        stepCount={labels.length}
      />
    </View>
  );
};

export default ProgressBarShip;
