import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeStack({ navigation }) {
  return (
    <>
      <View style={styles.container}>
      <StatusBar style="auto" />
        <Text>Esto es una muestra de enviar SMS, Whatsapps y Llamar por telefono.</Text>
        <Text>A continuacion elija una de las opciones:</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('SMSScreen')}
        >
          <Text style={styles.buttonText}>Enviar SMS</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('WPPScreen')}
        >
          <Text style={styles.buttonText}>Enviar WhatsApp</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('CALLScreen')}
        >
          <Text style={styles.buttonText}>Hacer Llamada</Text>
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
    title: {
      fontSize: 18,
      fontWeight: '600',
      marginBottom: 10,
      textAlign: 'center',
    },
    subtitle: {
      fontSize: 14,
      marginBottom: 30,
      textAlign: 'center',
    },
    button: {
      backgroundColor: '#007AFF',
      paddingVertical: 15,
      paddingHorizontal: 30,
      borderRadius: 10,
      marginVertical: 10,
      width: '80%',
      alignItems: 'center',
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });