import React from 'react';
import { SafeAreaView, Text } from '../../Style';

export default function Login(props) {
    return (
      <SafeAreaView>
        
        <Text>Login</Text>
        <Text>Nome: {props.navigation.state.params.nome}</Text>
      </SafeAreaView>
    );
  
  }
  