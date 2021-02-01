import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button } from './Styles';
export default function Connection() {
  const [body, setBody] = useState('');
  const [title, setTitle] = useState('');

  const handleClicker = async () => {
    if (title != '' && body != '') {

      const req = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: title,
          body: body,
          userId: 1337
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const json = await req.json();
      alert('Adicionado. ID:'+json.id+' - '+ json.title);
    } else {
      alert('Digite os valores.');
    }
  }
  return (
    <View>
      <Text>Titulo</Text>
      <TextInput value={title}
        placeholder='Titulo'
        onChangeText={t => setTitle(t)}
      />

      <Text>Corpo</Text>
      <TextInput value={body}
        placeholder='Body'
        onChangeText={t => setBody(t)}
      />
      <Button title='Confirmar'
        onPress={handleClicker}
      />
    </View>
  );
}