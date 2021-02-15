import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabHomeScreen from '../views/HomeScreen';
import TabAboutScreen from '../views/AboutScreen';
const Tab = createBottomTabNavigator();


export default function MainTab() {
    return(
    <Tab.Navigator>
        <Tab.Screen name='TabHome' component={TabHomeScreen} />
        <Tab.Screen name='About' component={TabAboutScreen} />
    </Tab.Navigator>
    );
}