import {createStackNavigator} from 'react-navigation-stack';
import Home from '../views/Home';
import Login from '../views/Login';

const MainNavigator = createStackNavigator({
  Home:{
      screen:Home, 
      params:{
        nome:'Gustavo'
      }
  },
  Login:{
      screen:Login
  }
}, {
  defaultNavigationOptions:{
   
    },
  
});

export default MainNavigator;