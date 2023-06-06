import React, { useState } from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TextInput, Button, Headline, Text } from 'react-native-paper';
import { useFonts } from 'expo-font';
import Container from '../components/Container';
import Body from '../components/Body';
import Input from '../components/Input';
import InputChar from '../components/InputChar';
import Logo from '../components/Logo';

import { useNavigation } from '@react-navigation/native';
import { useUser } from '../contexts/UserContext';
import { login } from '../services/auth.services';

const Login = () => {
  const navigation = useNavigation();
  const { setSigned, setName, setJwtToken } = useUser();

  const [userId, setUserId] = useState('75');
  const [password, setPassword] = useState('pucminas');

  const handleLogin = async (event) => {    
    await login({
      id: userId,
      password: password,
      perfilAutorizado: ['Gerente', 'Atendente', 'Caixa']
    }).then((res) => {       
      if (res && res.jwtToken) {
        setSigned(true);
        setJwtToken(res.jwtToken);
        setName(res.jwtToken);
        AsyncStorage.setItem('@TOKEN_KEY', res.jwtToken).then();
      } else {   
        // A navegação para a tela de acesso negado não funcionou porque precisa ajustar o navigation da NavigationUserUnsigned
        //navigation.navigate('AccessDenied');          
        console.error('Usuário ou senha inválidos ou Acesso restrito');
      }
    });
  };

  return (
    <ImageBackground
      source={require('../assets/background2.jpg')}
      style={styles.backgroundImage}
    >
    <Container>
        <View style={styles.header}>
          <Logo />
        </View>

       <Headline style={styles.textHeader}>Login</Headline>

        <Body>
          <InputChar
            style={styles.charRegister}
            label="Identificador"
            value={userId}
            onChangeText={(text) => setUserId(text)}
            left={<TextInput.Icon name="account" />}
          />
          <InputChar
            style={styles.charRegister}
            label="Senha"
            value={password}
            secureTextEntry
            onChangeText={(text) => setPassword(text)}
            left={<TextInput.Icon name="key" />}
          />
          <Button
            style={styles.buttonLogin}
            mode="contained"
            onPress={handleLogin}>
            LOGIN
          </Button>
          <Button
            style={styles.buttonRegister}
            mode="contained"
            onPress={() => navigation.navigate('REGISTRO')}>
            Registrar
          </Button>
        </Body>
    </Container>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  charRegister: {
    color: '#FFF',
    borderWidth: 1,
    borderColor: '#FF0000',
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 8,
    marginTop: 8,
    padding: 2,
  },

  buttonLogin: {
    backgroundColor: '#FF0000',
    borderRadius: 50,
    marginBottom: 15,
    width: '50%',
    alignSelf: 'center',
  },

  buttonRegister: {
    color: '#000000',
    borderRadius: 50,
    backgroundColor: '#FF0000',
    width: '50%',
    alignSelf: 'center',
  },
  textHeader: {
    color: '#FFF',
    textAlign: 'center',
    // fontFamily: 'Comfortaa',
  },
  header: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 12,
  },
});

export default Login;
