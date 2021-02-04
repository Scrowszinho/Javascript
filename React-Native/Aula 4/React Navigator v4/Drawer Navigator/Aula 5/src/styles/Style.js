import styled from 'styled-components/native';

export const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  background-color: #333;
  align-items: center;
  justify-content: center;
  padding-top:40px;
`;

export const Text = styled.Text`
color:#fff;
font-weight:bold;
padding:10px;
`;

export const Button = styled.Button`
`;

export const Input = styled.TextInput`
height:40px;
padding:10px;
border:white solid 1px;
`;

export const Image = styled.Image`
width:30;
height:30;
`;

export const TabBarButtonArea = styled.TouchableOpacity`
flex: 1;
height:50;
justify-content:center;
align-items:center;
`;

export const ButtonText = styled.View`
width:50;
height:50;
border-radius:25;
background-color:black;
`;