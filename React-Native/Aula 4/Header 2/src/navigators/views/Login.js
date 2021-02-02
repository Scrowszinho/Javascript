import React from 'react';
import { SafeAreaView, Text } from '../../Style';

const Screen = (props) => {
    return (
      <SafeAreaView>
        <Text>Login</Text>
      </SafeAreaView>
    );
  
  }
  
  Screen.navigationOptions = () => {
    return{
      title:'Login',
    }
  }
  
  export default Screen;