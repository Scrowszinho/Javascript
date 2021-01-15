import React, {useEffect} from 'react';
import styled from 'styled-components/native'; 
import Header from './src/components/Header';

const Page = styled.SafeAreaView`
flex:1;
`;

export default function App() {

  return (
    <Page>
      <Header />
    </Page>
  );
}

