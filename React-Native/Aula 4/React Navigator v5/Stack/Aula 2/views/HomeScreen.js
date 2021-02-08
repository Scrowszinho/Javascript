import React, { useState } from 'react';
import { View, Text, Button, TextInput } from '../styles/Styles';
import { useNavigation } from '@react-navigation/native';

function HomeScreen() {
    const navigation = useNavigation();
    const [nome, setNome] = useState('');
    return (
        <View>
            <Text>Tela Home</Text>
            <TextInput
                placeholder='Digite o seu nome'
                value={nome}
                onChangeText={t => setNome(t)}
            />
            <Button
                title="Sobre"
                onPress={() => navigation.navigate('About',{nome})}
            />
        </View>
    );
}

export default HomeScreen;  