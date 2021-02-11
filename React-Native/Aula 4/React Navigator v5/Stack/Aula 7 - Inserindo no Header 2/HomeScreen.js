import React, { useState, useLayoutEffect } from 'react';
import { View, Text, Button, TextInput } from '../styles/Styles';
import { useNavigation } from '@react-navigation/native';

function HomeScreen() {
    const navigation = useNavigation();
    const [nome, setNome] = useState('');
    const [count, setCount] = useState(0);
    const handleButton = () => {
        //navigation.navigate('About',{nome}
        navigation.setOptions({
            title: nome
        });
    }

    const handleHader = () => {
        // setCount(count+1);
        // setCount((c)=> {
        //     return c+1;
        // });
        setCount(c => c+1);
    }

    useLayoutEffect(() => {
        navigation.setOptions(
            {
                title: count
            }
        );
    }, [count]);

    useLayoutEffect(()=>{
    navigation.setOptions({
        headerRight:() => <Button title='+ 1' onPress={handleHader} />
    })
    },[]);


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
                onPress={handleButton}
            />

            <Button title='Bg Color'
                onPress={() => navigation.setOptions({
                    headerStyle: {
                        backgroundColor: '#ff00FF'
                    }
                })}
            />
            <Button title='- 1'
                onPress={() => setCount(count - 1 )}
            />

        </View>
    );
}

export default HomeScreen;  