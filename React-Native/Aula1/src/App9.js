import React, {useState} from 'react';
import {Text} from 'react-native'
import styled from 'styled-components/native'; 


const Page = styled.SafeAreaView`
flex:1;
justify-content:center;
align-items:center;
`;

const Image = styled.Image`
width:200px;
height:300px;
background-color:red;
`;

export default function App() {

  const [status, setStatus] = useState('');

  return (
    <Page>
      <Image 
      resizeMode="cover"
      source={require('./src/img/343344.jpg')} />

      <Image source={{uri:'http://www.google.com/google.jpg'}} 
      resizeMode="repeat" defaultSource={{require:'./src/img/placeholder.png'}}
      onLoadStart={() => setStatus('Carregando...') }
      onLoad={() => setStatus('Carregou!')}
      onError={(e) => setStatus(e.nativeEvent.error)}
      onProgress={(e) => setStatus(e.nativeEvent.total)}
      />
      <Text>{status}</Text>
    </Page>
  );
}

