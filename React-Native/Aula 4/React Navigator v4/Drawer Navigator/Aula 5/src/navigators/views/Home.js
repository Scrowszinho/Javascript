import React from 'react';
import { SafeAreaView, Text, Button, Image } from '../../styles/Style';

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
      <Button
        title='Abrir Drawer'
        onPress={()=>props.navigation.toggleDrawer()}
      />
    </SafeAreaView>
  );
}

Screen.navigationOptions = () => {
  return {
    title: 'Home',
    drawerIcon:({focused,tintColor})=>(
        <Image 
        source={focused?require('../../img/ha.png'):require('../../img/h.png')}
        />
    )

  }

}

export default Screen;