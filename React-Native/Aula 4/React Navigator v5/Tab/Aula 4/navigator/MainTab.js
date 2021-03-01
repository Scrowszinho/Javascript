import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabHomeScreen from '../views/HomeScreen';
import TabAboutScreen from '../views/AboutScreen';
const Tab = createBottomTabNavigator();
import { Image } from 'react-native';
import TabBarIcon from '../components/TabBarIcon';

export default function MainTab() {
    return(
    <Tab.Navigator
    screenOptions={({route})=>({
     tabBarIcon:()=> <TabBarIcon name={route.name} />
    })}
    >
        <Tab.Screen name='TabHome' component={TabHomeScreen} options={{tabBarLabel:'Home'}} />
        <Tab.Screen name='About' component={TabAboutScreen} options={{tabBarLabel:'Sobre'}} />
    </Tab.Navigator>
    );
}