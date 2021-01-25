import React, { useState } from 'react';
import {View, Button} from './src/Styles';
import { StatusBar } from 'react-native';

export default function App() {
  const [statusControl, setStatusControl] = useState(false);
  return (
    <View>
      <StatusBar 
      barStyle="light-content"
      backgroundColor="#fada5e"
      hidden={statusControl}
      animated={true}
      />
        <Button 
        title='Esconder Status Bar'
        onPress={() => setStatusControl(!statusControl)}
        />
    </View>
  );
}