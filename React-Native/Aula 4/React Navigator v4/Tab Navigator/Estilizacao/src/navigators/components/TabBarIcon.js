import React from 'react';
import styled from 'styled-components/native';


const TabBarIcon = styled.View`
width:30px;
height:30px;
justify-content:center;
align-items:center;
`;

const TabBarImage = styled.Image`
width:inherit;
height:inherit;
`;

const TabBarBadge = styled.View`
width:15;
height:15;
border-radius:8;
background-color:red;
position:absolute;
justify-content:center;
align-items:center; 
right:0;
top:0;
`;

const TabBarBadgeCount = styled.Text`
font-size:12;
color:white;
`;

export default (props) => {
    let img = null;
    switch (props.route) {
        case 'Welcome':
            img = (props.focused) ?
                require('../../img/ha.png') :
                require('../../img/h.png');
            break;

        case 'Login':
            img = (props.focused) ?
                require('../../img/msa.png') :
                require('../../img/ms.png');
            break;
    }
    return (
        <TabBarIcon>
            <TabBarImage
                source={img}
            />
            {props.badge > 0 &&
            <TabBarBadge>
                <TabBarBadgeCount>{props.badge}</TabBarBadgeCount>
            </TabBarBadge>
            }
     </TabBarIcon>
    );
}