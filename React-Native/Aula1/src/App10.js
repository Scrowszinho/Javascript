import React from 'react';
import styled from 'styled-components/native'; 
import lista from './src/lista';

const Page = styled.SafeAreaView`
flex:1;
`;

const Scroll = styled.ScrollView`
flex:1;
`;

const Item = styled.View`
padding:10px;
`;

const ItemText = styled.Text`
font-size:15px;
`;

export default function App() {

  let pessoa = {nome:'Gustavo', idade:20};
  console.log(pessoa);
  return (
    <Page>
      <Scroll>
      {lista.map((item,index) =>{
        return(
          <Item key={index}>
            <ItemText>{item.task}</ItemText>
          </Item>
        );
      })}
      </Scroll>
    </Page>
  );
}

