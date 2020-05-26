import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import { TextInput, StyleSheet } from 'react-native';
import { TextInputProps } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: 320,
    height: 50,
    borderRadius: 16,
    margin: 8,
    color: 'black',
    borderBottomWidth: 0.5,
    borderColor: '#8258FA',
    paddingLeft: 14
  }
})

interface Props extends TextInputProps {
  name: string;
}

interface InputValueReference {
  value: string;
}

export const Input: React.FC<Props> = ({ name, ...rest }) => {
  const inputRef = useRef<any>(null)
  const { fieldName, registerField, defaultValue } = useField(name);
  const inputValueRef = useRef<InputValueReference>({ value: defaultValue });

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <TextInput style={styles.container}
      ref={inputRef}
      keyboardAppearance="dark"
      placeholderTextColor="#8258FA"
      onChangeText={value => {
        inputValueRef.current.value = value;
      }}
      {...rest}
    />
  )
}