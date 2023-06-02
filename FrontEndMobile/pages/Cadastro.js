import React, { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { TextInput, Button, Headline } from 'react-native-paper';
import Container from '../components/Container';
import Body from '../components/Body';
import Input from '../components/Input';
import Logo from '../components/Logo';
import { register } from '../services/auth.services';

import { useNavigation } from '@react-navigation/native';

const Register = () => {

  const navigation = useNavigation();
 
  const [name, setName] = useState('Rafael');
  const [surname, setSurName] = useState('Mautone');  
  const [email, setEmail] = useState('rafael@gmail.com');
  const [password, setPassword] = useState('pucminas');
  const [userId, setUserId] = useState(null)  
  
  const handleRegister = async (event) => {

    const newUser = {
      name: name,
      surname: surname,
      email: email,
      password: password,
      perfil: 1
    };
    await register(newUser)
    .then( res => {

      if(res){
        setUserId(res.id);
        Alert.alert('Atenção', 'Usuário Cadastrado com sucesso: '+ res.id,
        [
          { text: "OK", onPress: () => navigation.goBack() }
        ]);

      }else{

         Alert.alert('Atenção', 'Usuário não cadastrado! Tente novamente mais tarde!');
      }

    });
    
  }

  return (
    <Container>
      <View style={styles.header}>
       <Logo />
      </View>

      <Headline style={styles.textHeader}>Registre-se gratuitamente</Headline>

      <Body>
      <Input
          label="Nome"
          value={name}
          onChangeText={(text) => setName(text)}
          left={<TextInput.Icon name="account" />}
        />
        <Input
          label="Sobrenome"
          value={surname}
          onChangeText={(text) => setSurName(text)}
          left={<TextInput.Icon name="account" />}
        />        
        <Input
          label="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          left={<TextInput.Icon name="email" />}
        />
        <Input
          label="Senha"
          value={password}
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
          left={<TextInput.Icon name="key" />}
        />
        <Button
         style={styles.buttonLogin}
          mode="contained"
          onPress={handleRegister}
          >
          REGISTRAR
        </Button>
        <Button
          style={styles.buttonCancela}
          mode="contained"
          onPress={() => navigation.goBack()}>
          Cancelar
        </Button>     
      </Body>
    </Container>
  );
};

const styles = StyleSheet.create({


    buttonLogin: {
    backgroundColor: '#FF0000',
    borderRadius: 50,
    marginBottom: 15,
    width: '50%',
    alignSelf: 'center',
  },
  buttonCancela: {
    color: '#000000',
    backgroundColor: '#FF0000',
    borderRadius: 50,
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


export default Register;