import React,{useState} from 'react';
import { SafeAreaView, Text, Button, Input } from '../../Style';

export default function Home(props) {
    const [nome, setNome] = useState('');
    const handleClicker = () => {
    props.navigation.navigate('Login',{
      nome:nome
    });
    }

    return (
      <SafeAreaView>
        <Text>Home</Text>
        <Input 
        placeholder='Digite seu nome'
        value={nome}
        onChangeText={t=>setNome(t)}
        />
        <Button 
        title='Login'
        onPress={handleClicker}
        />
      </SafeAreaView>
    );
  
  }
  