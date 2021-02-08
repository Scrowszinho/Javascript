import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../views/HomeScreen';

const MainStack = createStackNavigator();

export default () => (

        <MainStack.Navigator>
            <MainStack.Screen name='Home' component={HomeScreen} />
        </MainStack.Navigator>
    )
