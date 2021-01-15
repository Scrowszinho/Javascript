import React, {useState} from 'react';
import {Text, View} from 'react-native';
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

  // function mudarTexto(nome){
  // setName(nome);
  // } 

  return(
    <View>
    <Input value={name} onChangeText={t=>setName(t)} />
    <Text>Olá {name}</Text>
    </View>
  );
}
// Recebe o texto e retorna enquanto ele for mudado no campo Text 

export default function App() {
  return (
    <Page>
      <Hello />
    </Page>
  );
}


// Utilização do Input
// Utilizando o campo input juntamente a uma state, no arquivo
// App1.js, para alterar um campo de texto com a digitação.