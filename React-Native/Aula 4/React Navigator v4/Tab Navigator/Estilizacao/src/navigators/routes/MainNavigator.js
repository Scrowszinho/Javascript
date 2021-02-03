import { createBottomTabNavigator } from 'react-navigation-tabs';
import Home from '../views/Home';
import Login from '../views/Login';
import React from 'react';
import CustomTabBar from '../../styles/CustomTabBar';

const MainNavigator = createBottomTabNavigator({
  Welcome:{
    screen:Home
  }, 
  Login:{
    screen:Login
  }
},{
  tabBarOptions:{
   
  },
  defaultNavigationOptions:{
    tabBarComponent:(props)=>(
      <CustomTabBar {...props} 
      items={[
        {text:'Inicio', route: 'Home'},
        {text:'Sobre', route: 'Login'},
        {text:'Configurações', route: 'Home'}
      ]}
      />
    )
  }
});

export default MainNavigator;