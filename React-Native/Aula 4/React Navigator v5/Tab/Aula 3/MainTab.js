import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabHomeScreen from '../views/HomeScreen';
import TabAboutScreen from '../views/AboutScreen';
const Tab = createBottomTabNavigator();
import { Image } from 'react-native';

export default function MainTab() {
    return(
    <Tab.Navigator
    screenOptions={({route})=>({
    tabBarIcon: ({focused, color, size}) => {
    let imgSrc = null;

    switch(route.name){
    case 'TabHome':
    imgSrc = require('../img/a.png');
    break;
    case 'About' :
        imgSrc = require('../img/ah.png');
        break;
    }

     return <Image source={imgSrc} style={{width:24 , height:24}} />;
    }
    })}
    // lazy={false}
    tabBarOptions={{
        // activeBackgroundColor:'#999',
        // activeTintColor:'red',
        // inactiveTintColor:'green',
        // style:{
        //     height:80,
        // },
        // labelStyle:{
        //     fontSize:18
        // },
        // labelPosition: 'below-icon-icon',
        // tabStyle:{

        // }
        keyboardHidesTabBar: true
    }}
    >
        <Tab.Screen name='TabHome' component={TabHomeScreen} options={{tabBarLabel:'Home'}} />
        <Tab.Screen name='About' component={TabAboutScreen} options={{tabBarLabel:'Sobre'}} />
    </Tab.Navigator>
    );
}