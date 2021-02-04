import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeDrawer from './HomeDrawer';
import Config from '../views/Config';


const MainNavigator = createBottomTabNavigator({
  Welcome:{
    screen:HomeDrawer
  }, 
  Config:{
    screen:Config
  }
});

export default MainNavigator;