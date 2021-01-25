import React, { useState } from 'react';
import { BoxBody, View, Box, Button } from './src/Styles';
import { Modal } from 'react-native';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <Button
        title="Mostrar"
        onPress={() => setModalVisible(true)}
      />

      <Modal
        visible={modalVisible} /* ou false */
        animationType="fade" /* none, slide*/
        transparent={true} /* false */
        onRequestClose={() => setModalVisible(false)} /* Usa o botão voltar para fechar o modal */
      >
        <Box>
        <BoxBody>
        <Button
        title="Fechar"
        onPress={() => setModalVisible(false)}
      />
        </BoxBody>
        </Box>
      </Modal>
    </View>
  );
}