import {createStackNavigator} from 'react-navigation-stack';
import Home from '../views/Home';
import Perfil from  '../views/Perfil';

const HomeStack = createStackNavigator({
Home:{
    screen:Home
},
Perfil:{
    screen:Perfil
}
});

export default HomeStack;