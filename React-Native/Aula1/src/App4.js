import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';
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

const Quadrado = styled.View`
width:200px;
height:200px;
justifyContent:center;
alignItems:center;
border:3px dashed #000;
margin-top:30px;
`;

const Hello = (props) => {
  const [name, setName] = useState('Gustavo');
  const [mostrar, setMostrar] = useState(false);
  const handleClick = () => {
  setMostrar(!mostrar);
  }

  return (
    <View>
      <Input value={name} onChangeText={t => setName(t)} />
      <Button title={mostrar ? 'Ocultar nome' : 'Mostrar nome'} onPress={handleClick} />

      {mostrar && 
      <Quadrado>
      <Text>Seu nome é </Text>
      <Text> {name} </Text>
      </Quadrado>
      }
  
      
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

// Condicional de exibição na pratica
// Fazendo surgir e sumir uma box com o conteúdo digitado