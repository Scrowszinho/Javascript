import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
import React from 'react';
import Home from './screens/Home';
import Login from './screens/Login';
import {NavigationContainer} from '@react-navigation/native';


export default function MainNavigator() {
    return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen
          name='Home'
          component={Home}
          options={{ title: 'Home' }}
        />  
        <Stack.Screen
          name='Login'
          component={Login}
          options={{ title: 'Login' }}
        />
      </Stack.Navigator>
      </NavigationContainer>
    );
  }


