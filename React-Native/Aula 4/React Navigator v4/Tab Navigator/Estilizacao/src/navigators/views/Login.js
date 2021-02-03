import React from 'react';
import { SafeAreaView, Text, Button } from '../../styles/Style';

const Screen = (props) => {
    return (
      <SafeAreaView>
        <Text>Login</Text>
        <Button 
        title='Voltar'
        onPress={()=> props.navigation.goBack()}
        />
      </SafeAreaView>
    );
  
  }
  
  Screen.navigationOptions = () => {
    return{
      //  tabBarVisible:false
          tabBarLabel:'Login',
         
  }
}
  export default Screen;