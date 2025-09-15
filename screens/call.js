import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function CALL() {
  return (
    <>
      <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Esto es una muestra de Llamar por telefono</Text>
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
    }
  });