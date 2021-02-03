import React from 'react';
import styled from 'styled-components/native';

const CustomArea = styled.SafeAreaView`
height:100;
width:100%;
background-color:#000;
flex-direction:row;

`;

const CustomTabBarButton = styled.TouchableOpacity`
flex:1;
justify-content:center;
align-items:center;
`;
const CustomTabBarText = styled.Text`
color:white;
font-size:15;
`;

export default (props) => {

  
    return(
        <CustomArea>
            {props.items.map((item, index) =>{
            return(
                <CustomTabBarButton key={index} onPress={()=>props.navigation.navigate(item.route)}>
                <CustomTabBarText>{item.text}</CustomTabBarText>
                </CustomTabBarButton>
            );
        })
        }
        </CustomArea>
    );
}