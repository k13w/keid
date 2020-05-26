import React, { useRef } from 'react'
import { View, TouchableOpacity, SafeAreaView, StatusBar, TextInput } from 'react-native';
import { SubmitHandler, FormHandles } from '@unform/core';
import { Form } from '@unform/mobile';

import { Input } from '../../components/Form/Input';
import { useAuth } from '../../contexts/auth';

import {
  Container,
  HeaderBackground,
  PanelLogin,
  Footer,
  SubmitButton,
  SubmitButtonText,
} from './styles';

interface FormData {
  id: number;
  username: string;
  email: string;
  password: string;
};

const SingIn: React.FC = () => {
  const { singIn } = useAuth();
  const formRef = useRef<FormHandles>(null);

  const handleSingIn: SubmitHandler<FormData> = (data) => {
    singIn(data);
  }

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#8258FA" />
      <HeaderBackground imageStyle={{ borderBottomLeftRadius: 100 }} source={require('./logo3.png')}>
        <SafeAreaView>

        </SafeAreaView>
      </HeaderBackground>
      
      <PanelLogin>
        <Form ref={formRef} onSubmit={handleSingIn}>
          <Input 
            autoCorrect={false}
            keyboardType="email-address"
            name="email"
            placeholder="E-mail"
            autoCapitalize="none"
            returnKeyType="next"
          />
          <Input 
            secureTextEntry
            returnKeyType="send"
            name="password" 
            placeholder="Password"
            autoCapitalize="none"
          />
          <TouchableOpacity />
          <SubmitButton title="Sign in" onPress={() => formRef.current?.submitForm()}>
            <SubmitButtonText>SING IN</SubmitButtonText>
          </SubmitButton>
        </Form>
      </PanelLogin>
      <Footer />
    </Container>
  )
}

export default SingIn;