import React, {useState} from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native'; 


const Page = styled.SafeAreaView`
flex:1;
`;

const Header = styled.View`
flex-direction:row;
justifyContent:center;
align-items:flex-start;
flex-wrap:wrap;
backgroundColor: #EEE;
height:100px;
`;

const Quadrado = styled.View`
backgroundColor:${props=>props.color};
width:50px;
height:50px;
`;

/* Ao declarar flex:1 o elemento fica do mesmo tamanho */

const Hello = (props) => {
  const [name , setName] = useState('Gustavo');
  return(
    <Text>Nome: {name}</Text>
  );
}
// Noção de props e state

export default function App() {
  return (
    <Page>
      <Header>
      <Quadrado color="red"></Quadrado>
      <Quadrado color="green"></Quadrado>
      <Quadrado color="blue"></Quadrado>
      <Quadrado color="pink"></Quadrado>

      <Quadrado color="red"></Quadrado>
      <Quadrado color="green"></Quadrado>
      <Quadrado color="blue"></Quadrado>
      <Quadrado color="pink"></Quadrado>

      <Quadrado color="red"></Quadrado>
      <Quadrado color="green"></Quadrado>
      <Quadrado color="blue"></Quadrado>
      <Quadrado color="pink"></Quadrado>
      </Header>

      <Hello frase="Outra Props" />
    </Page>
  );
}

