import React from 'react';
import { View, Text, Button } from '../styles/Styles';
import { useNavigation, useRoute } from '@react-navigation/native';

function AboutScreen() {
    const navigation = useNavigation();
    const route = useRoute();
    const nome = route.params?.nome ?? 'Visitante';
    return (
        <View>
            <Text>Tela de Sobre</Text>
            <Text>{nome}</Text>
            <Button
                title="Voltar"
                onPress={() => navigation.popToTop()}
            />
        </View>
    );
}

export default AboutScreen;  