import React, {useState, useEffect} from 'react';
import { Text, View,Input,Button, NameArea, NameText } from './src/Styles';
import AsyncStorage from '@react-native-community/async-storage';

export default function App() {
  const [name, setName] = useState('');
  const [newName, setNewName] = useState('');

  const handleSave = async () => {
  if (newName !=''){
    await AsyncStorage.setItem('@name',newName);
    setName(newName);
    setNewName('');
    }
  }

  const getName = async () => {
    const n = await AsyncStorage.getItem('@name');
    setName(n);
  }

  useEffect(()=>{
    getName();
  }, []);
  
  return (
    <View>
      <Text>Teste</Text>
      <Input placeholder='Digite seu nome' 
      value={newName}
      onChangeText = {e => setNewName(e)}
      />
      <Button 
      title='Salvar'
      onPress={handleSave}
      />

      <NameArea>
          <NameText>{name}</NameText>
      </NameArea>
    </View>
  );
}