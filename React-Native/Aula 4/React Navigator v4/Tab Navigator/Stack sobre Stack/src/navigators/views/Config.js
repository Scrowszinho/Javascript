import React from 'react';
import { SafeAreaView, Text, Button } from '../../styles/Style';

const Screen = (props) => {
    return (
      <SafeAreaView>
        <Text>Config</Text>
        <Button 
        title='Voltar'
        onPress={()=> props.navigation.goBack()}
        />
      </SafeAreaView>
    );
  
  }
  
  Screen.navigationOptions = () => {
    return{
  }
}
  export default Screen;