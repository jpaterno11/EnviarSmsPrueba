import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function WPP() {
  return (
    <>
      <View style={styles.container}>
      <StatusBar style="auto" />
        <Text>Esto es una muestra de enviar WPP</Text>
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