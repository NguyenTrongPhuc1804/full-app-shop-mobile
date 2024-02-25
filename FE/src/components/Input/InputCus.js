import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLOR} from '../../constant/color';
import {editable} from 'deprecated-react-native-prop-types/DeprecatedTextInputPropTypes';

const InputCus = ({
  password,
  title,
  placeholder,
  onChange,
  value,
  editable,
}) => {
  const [eye, setEye] = useState(true);
  const [focus, setFocus] = useState(COLOR.grey);
  const onFocus = () => {
    setFocus(COLOR.third);
  };

  const onBlur = () => {
    setFocus(COLOR.grey);
  };
  return (
    <View style={{marginBottom: 10, position: 'relative', width: '100%'}}>
      <Text
        style={{
          marginBottom: 10,
          fontSize: 16,
          color: 'black',
          fontWeight: '600',
        }}>
        {title}
      </Text>
      <TextInput
        style={{
          width: '100%',
          height: 54,
          borderRadius: 10,
          borderWidth: 2,
          borderColor: focus,
          backgroundColor: '#F1F4FF',
          padding: 10,
          marginBottom: 18,
          fontSize: 16,
          color: COLOR.black,
        }}
        onFocus={() => onFocus()}
        onBlur={() => onBlur()}
        placeholderTextColor={COLOR.gray}
        value={value}
        secureTextEntry={password ? eye : false}
        placeholder={placeholder}
        onChangeText={value => onChange(value)}
        editable={editable}
      />
      {password ? (
        <TouchableOpacity
          onPress={() => {
            setEye(!eye);
          }}
          style={{position: 'absolute', bottom: 34, right: 10}}>
          <Ionicons name={eye ? 'eye-off' : 'eye'} size={24} color={'black'} />
        </TouchableOpacity>
      ) : (
        ''
      )}
    </View>
  );
};

export default InputCus;
