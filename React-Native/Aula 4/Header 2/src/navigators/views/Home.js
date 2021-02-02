import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, Button, Input, TituloLogo } from '../../Style';

const Screen = (props) => {
  const [nome, setNome] = useState('');
  const handleClicker = () => {
    props.navigation.navigate('Login', {
      nome: nome
    });
  }

  useEffect(()=>{
    props.navigation.setParams({
      nome:nome
    })
  },[nome]);

  return (
    <SafeAreaView>
      <Text>{props.navigation.state.params.nome}</Text>
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

Screen.navigationOptions = ({navigation}) => {
  let bg = '#EEE';
  if(navigation.state.params && navigation.state.params.nome){
    bg = navigation.state.params.nome;
  }
  return{
    title:navigation.state.params.nome,
    headerStyle:{
      backgroundColor:bg
    }
  }
}

export default Screen;