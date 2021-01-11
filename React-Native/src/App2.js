import React, {useState} from 'react';
import {Text, View, Button} from 'react-native';
import styled from 'styled-components/native'; 


const Page = styled.SafeAreaView`
flex:1;
alignItems: center;
justifyContent: center;
`;

const Input = styled.TextInput`
width:200px;
height: 40px;
border: 1px solid #000;
`;

const Hello = (props) => {
  const [name , setName] = useState('Gustavo');
  const [backupName, setBackupName] = useState('');
 
  const handleClick = () => {
    setBackupName(name);
  }

  return(
    <View>
    <Input value={name} onChangeText={t=>setName(t)} />
    <Button title="Trocar nome" onPress={handleClick} />
    <Text>Olá {backupName}</Text>
    </View>
  );
}

export default function App() {
  return (
    <Page>
      <Hello />
    </Page>
  );
}

// Criação de mais uma state pra alterar o valor do texto
// com o que o usuario digitar;