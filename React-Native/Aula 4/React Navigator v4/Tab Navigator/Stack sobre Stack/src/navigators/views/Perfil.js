import React  from 'react';
import { SafeAreaView, Text, Button} from '../../styles/Style';

const Screen = (props) => {

  const handleClicker = () => {
    props.navigation.navigate('Login');
  }


  return (
    <SafeAreaView>
      <Text>Perfil</Text>
      <Button
        title='Login'
        onPress={handleClicker}
      />
    </SafeAreaView>
  );
}

Screen.navigationOptions = () => {
      return{
        title:'Perfil'
    }
  
}

export default Screen;