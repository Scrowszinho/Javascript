import React, {Component} from 'react';
import styled from 'styled-components/native'; 


const Page = styled.SafeAreaView`
flex:1;
align-items: center;
justify-content: center;
`;

const Logo = styled.View`
width:100px;
height:100px;
background-color:#000;
margin-bottom:20px;
`;

const Input = styled.TextInput`
width:90%;
height:50px;
border:1px solid black;
`;

const KeyboardArea = styled.KeyboardAvoidingView`
flex:1;
`;

export default function App() {
  return (
    <Page>
      <KeyboardArea behavior={Platform.OS == 'ios' ? 'padding' : null }>
      <Logo></Logo>
      <Input />
      </KeyboardArea>
    </Page>
  );
}

