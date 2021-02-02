import {createStackNavigator} from 'react-navigation-stack';
import Home from '../views/Home';
import Login from '../views/Login';

const MainNavigator = createStackNavigator({
  Home:{
      screen:Home, 
      // navigationOptions:{
      //   title:'Testando',
      // }
  },
  Login:{
      screen:Login
  }
}, {
  defaultNavigationOptions:{
   headerBackTitle:'Voltar',
   headerBackTitleStyle:{
     color:'#FF0000'
   },
   headerStyle:{
     backgroundColor:'#fada5e',
     height:100
   },
   headerTitleStyle:{
     fontWeight:'bold',
     fontSize:30,
   },
   headerTintColor:'#fff',
   headerTitleContainerStyle:{
     backgroundColor:'#ff0000'
   },
   headerLeftContainerStyle:{
     backgroundColor:'#00ff00'
   },
   headerRightContainerStyle:{
     backgroundColor:'purple'
   }
  }
});

export default MainNavigator;