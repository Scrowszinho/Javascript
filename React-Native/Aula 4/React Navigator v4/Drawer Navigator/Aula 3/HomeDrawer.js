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
    drawerPosition:'left',
    drawerType:'front',
    drawerWidth:200,
    drawerBackgroundColor:'#fada5e',
    edgeWidth:10,
    hideStatusBar:true,
    overlayColor:0,
    contentOptions:{
        activeTintColor: '#0d0b05',
        activeBackgroundColor: '#eecf59',
        itemStyle:{
            backgroundColor:'red'
        },
        labelStyle:{
            fontSize:13,
        }
    }
});

export default HomeDrawer;