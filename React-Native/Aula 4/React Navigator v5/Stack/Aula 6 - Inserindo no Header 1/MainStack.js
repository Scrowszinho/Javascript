import React from 'react';
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack';
import HomeScreen from '../views/HomeScreen';
import AboutScreen from '../views/AboutScreen';
import {Button, Image} from '../styles/Styles';

const MainStack = createStackNavigator();

export default () => (

        <MainStack.Navigator>
            <MainStack.Screen name='Home' component={HomeScreen} options={{
                    // headerTitle:() => <Image source={{uri:'https://www.google.com.br/google.jpg'}} 
                    // /> ,
                    headerRight:() => <Button title="Olá" onPress={()=>alert('Olá amigos')} />,
                    }} />
            <MainStack.Screen name='About' component={AboutScreen} 
            options={(props)=>({headerStyle:{backgroundColor:props.route.params.cor}})} />
        </MainStack.Navigator>
    )
