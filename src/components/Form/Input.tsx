import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import { TextInput, StyleSheet } from 'react-native';

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

interface Props {
    name: string;
};

export const Input: React.FC<Props> = ({ name, ...rest } ) => {
    const inputRef = useRef<HTMLDivElement>(null)
    const { fieldName, registerField } = useField(name);



    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value',
        });
    }, [fieldName, registerField]);

    return (
        <TextInput style={styles.container}
        ref={inputRef}
        keyboardAppearance="dark"
        placeholderTextColor="#8258FA"
        onChangeText={value => {
          if (inputRef.current) {
            inputRef.current.value = value;
          }
        }}
        {...rest}
      />
    )
}