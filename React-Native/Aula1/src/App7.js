import React, {useEffect} from 'react';
import { Alert, Dimensions, Text } from 'react-native';
import styled from 'styled-components/native'; 


const Page = styled.SafeAreaView`
flex:1;
align-items: center;
justify-content: center;
`;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function App() {

  useEffect(()=>{
    Alert.alert(
     'Aviso',
     'Esteja Avisado',
     [
       {text:'Feito', onPress:() => console.log('Apertou o feito')},
       {text: 'Desfeito', onPress:()=> console.log('Apertou o desfeito'), style:'cancel',},
     ] 
    );
  },[]);

  return (
    <Page>
     <Text>{windowWidth} x {windowHeight}</Text>
    </Page>
  );
}

