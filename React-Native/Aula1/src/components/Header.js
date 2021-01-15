import React, { useEffect } from 'react';
import styled from 'styled-components/native';

const Header = styled.View`
width:100%;
height:100px;
background-color:#EEE;
justify-content:center;
align-items:center;
`;

const HeaderText = styled.Text`
font-weight:bold;
font-size:18px;
`;

export default () => {
    return (
        <Header>
            <HeaderText>Texto aleatorio</HeaderText>
        </Header>

    );

}