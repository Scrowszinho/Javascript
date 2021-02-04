import {createDrawerNavigator} from 'react-navigation-drawer';
import Home from '../views/Home';
import React from 'react';
import Perfil from '../views/Perfil';
import CustomDrawer from '../../styles/CustomDrawer';

const HomeDrawer = createDrawerNavigator({
 Home:{
    screen:Home,
 },
 Perfil:{
     screen:Perfil, 
 }
},{
   contentComponent:(props)=> <CustomDrawer {...props} />
});

export default HomeDrawer;