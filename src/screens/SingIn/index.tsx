import React, { useRef } from 'react'
import { View, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
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
    username: string;
    email: string;
    password: string;
    current: object;
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
        <HeaderBackground imageStyle={{ borderBottomLeftRadius: 100}} source={require('./logo3.png')}>
            <SafeAreaView>

            </SafeAreaView>
        </HeaderBackground>
        <PanelLogin>
            <Form ref={formRef} onSubmit={handleSingIn}>
            <Input label='E-mail' name="email" type="email" placeholder="E-mail" />
            <Input label='Password'name="password" type="password" placeholder="Password" />
            <TouchableOpacity />
            <SubmitButton title="Sign in"  onPress={() => formRef.current.submitForm()}>
                <SubmitButtonText>SING IN</SubmitButtonText>
            </SubmitButton>
            </Form>
        </PanelLogin>
        <Footer />
    </Container>

    )
}

export default SingIn;