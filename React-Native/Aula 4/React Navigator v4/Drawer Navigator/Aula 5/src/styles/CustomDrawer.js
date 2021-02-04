import React from 'react';
import styled from 'styled-components/native';
import {DrawerNavigatorItems} from 'react-navigation-drawer';

const Scroll = styled.ScrollView`
flex:1;
`;

const View = styled.SafeAreaView`
flex:1;
align-items:center;
`;

const Logo = styled.View`
width:50;
height:50;
background-color:#000;
`;

export default (props)=>{
    return(
        <Scroll>
            <View>
                <Logo></Logo>
                <DrawerNavigatorItems {...props} 
                
                />
            </View>
        </Scroll>

    );
}