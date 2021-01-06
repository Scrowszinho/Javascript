import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native'; 

const Texto = styled.Text`
font-weight: bold;
color: ${props=>props.cor};
font-size: 30px;
`;
const PageView = styled.View`
   flex:1;
   alignItems: center;
   backgroundColor: #FFF;
`;

/* 
 const Texto = ()=>{
   return(
     <Text>Retornando texto Forma 1</Text>
   );
 }
*/

/* 
  function TextoInicial(){
    return(
      <Text>Retornando texto Forma 2</Text>
    );
  }
*/

// class TextoInicial extends Component{
//   render(){
//     return(
//       <Text>Retornando texto Forma 3</Text>
//     );
//   }
// }

// const TextoInicial = () => <Text>Retornando texto Forma 4</Text>;


export default function App() {
  return (
    <PageView>
      <Texto cor="pink">Teste</Texto>
      <Texto cor="black">Texto mesclado com o StyleSheet</Texto>
      <StatusBar style="auto" />
    </PageView>
  );
}

