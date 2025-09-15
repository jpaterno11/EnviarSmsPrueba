import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import axios from 'axios';

export default function SMS() {
    const [celNum, setCellNum] = useState('');
    const handleSubmit = async () => {
        if (!celNum ) {
          Alert.alert('Error', 'Por favor ingrese número');
          return;
        }
    
        try {
            const url = `https://api.smsmobileapi.com/sendsms/?recipients=${celNum}&message=Esto es un mensaje de prueba.&apikey=dc1d6bcff15109119d66fa1b0b47e64c8f2047b13a099060`;
      
            const response = await fetch(url);
            const data = await response.json();
      
            console.log('Respuesta SMS:', response.data);
          } catch (error) {
            console.error('Error enviando SMS:', error);
          }
        };
  return (
    <>
      <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Esto es una muestra de enviar SMS</Text>
      <TextInput style={styles.input} value={celNum} onChangeText={setCellNum} placeholder='Ingrese su número de telefono' keyboardType='phone-pad' />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Enviar SMS</Text>
      </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    },
    input: {
        height: 80,
        borderWidth: 2,
        padding: 15
    }
  });