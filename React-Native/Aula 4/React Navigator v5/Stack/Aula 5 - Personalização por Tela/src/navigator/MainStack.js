import React from 'react';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import HomeScreen from '../views/HomeScreen';
import AboutScreen from '../views/AboutScreen';

const MainStack = createStackNavigator();

export default () => (

    <MainStack.Navigator>
        <MainStack.Screen name='Home' component={HomeScreen} options={{ title: 'Início', }} />
        <MainStack.Screen name='About' component={AboutScreen} options={(props) => ({ headerStyle: { backgroundColor: props.route.params.cor } })} />
    </MainStack.Navigator>
)
