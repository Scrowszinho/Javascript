import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeStack from './HomeStack';
import Config from '../views/Config';


const MainNavigator = createBottomTabNavigator({
  Welcome:{
    screen:HomeStack
  }, 
  Config:{
    screen:Config
  }
});

export default MainNavigator;