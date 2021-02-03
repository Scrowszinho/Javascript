import React from 'react';
import { SafeAreaView, Text, Button} from '../../styles/Style';

const Screen = (props) => {
  const handleClicker = () => {
    props.navigation.navigate('Perfil');
  }


  return (
    <SafeAreaView>
      <Text>Seja bem vindo</Text>
    
      <Button
        title='Pessoa Perfil'
        onPress={handleClicker}
      />
    </SafeAreaView>
  );
}

Screen.navigationOptions = () => {
      return{
        title:'Home'
    }
  
}

export default Screen;