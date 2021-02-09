import React from 'react';
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack';
import HomeScreen from '../views/HomeScreen';
import AboutScreen from '../views/AboutScreen';

const MainStack = createStackNavigator();

export default () => (

        <MainStack.Navigator
        screenOptions={{
            headerStyle:{
                backgroundColor:'#4ad5ff',
                height:120
            },
            headerTitleStyle:{
            fontWeight:'bold',
            color:'white'    
            },
            
        }}
        >
            <MainStack.Screen name='Home' component={HomeScreen} options={{
                title:'Início',
                headerTitleAlign:'center',
                headerStyle:{
                backgroundColor:'#4ad5ff',
                },
                headerTitleStyle:{
                fontWeight:'bold',
                color:'white'
                }
            }} />
            <MainStack.Screen name='About' component={AboutScreen} 
            options={(props)=>({headerStyle:{backgroundColor:props.route.params.cor},
                headerBackTitle:'Voltar',
                headerBackTitleStyle:{}
            })} />
        </MainStack.Navigator>
    )
