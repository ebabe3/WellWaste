import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';

const TextInputUI = ({
  title,
  disabled,
  placeholder,
  styleProps,
  src,
  children,
  inputRef,
  ...inputProps
}) => {
  return (
    <View style={{...styleProps?.containerSty}}>
      <Text style={{color: 'black'}}>{title}</Text>
      <View
        style={[
          styles.textInputContainer,
          {
            borderColor: 'gray',
            ...styleProps?.textInputContainer,
          },
        ]}>
        <TextInput
          ref={inputRef}
          editable={!disabled}
          style={[
            styles.input,
            {
              ...styleProps?.inputSty,
            },
          ]}
          placeholderTextColor={'gray'}
          {...inputProps}
        />
      </View>
    </View>
  );
};

export default TextInputUI;

const styles = StyleSheet.create({
  textInputContainer: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 12,
    justifyContent: 'center',
    marginTop: 4,
  },
  input: {
    width: '100%',
  },
});
