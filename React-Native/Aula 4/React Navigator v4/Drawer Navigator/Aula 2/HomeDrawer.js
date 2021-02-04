import {createDrawerNavigator} from 'react-navigation-drawer';
import Home from '../views/Home';
import Perfil from '../views/Perfil';

const HomeDrawer = createDrawerNavigator({
 Home:{
    screen:Home,
 },
 Perfil:{
     screen:Perfil, 
 }
},{
    drawerPosition:'right',
    drawerType:'front',
    drawerWidth:200,
    drawerBackgroundColor:'#fada5e',
    edgeWidth:10,
    hideStatusBar:true,
    overlayColor:0
});

export default HomeDrawer;