import React, { useState } from 'react';
import { SafeAreaView, Text, Button, Input, TabBarButtonArea, ButtonText } from '../../styles/Style';
import TabBarIcon from '../components/TabBarIcon';

const Screen = (props) => {
  const [nome, setNome] = useState('');
  const handleClicker = () => {
    props.navigation.navigate('Login');
  }


  return (
    <SafeAreaView>
      <Text>Seja bem vindo</Text>
      <Input
        placeholder='Digite seu nome'
        value={nome}
        onChangeText={t => setNome(t)}
      />
      <Button
        title='Login'
        onPress={handleClicker}
      />
    </SafeAreaView>
  );
}

Screen.navigationOptions = () => {
      return{
        title:'Home'
    }
  
}

export default Screen;