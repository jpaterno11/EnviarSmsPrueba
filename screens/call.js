import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, TouchableWithoutFeedback, Keyboard, Modal, FlatList, Linking } from 'react-native';
import { useState } from 'react';
import countriesData from '../assets/countries.json';

export default function CALL() {
    const [celNum, setCellNum] = useState('');
    const [selectedCountry, setSelectedCountry] = useState('MX');
    const [modalVisible, setModalVisible] = useState(false);
    
    const countries = countriesData;
    
    const selectCountry = (countryCode) => {
        setSelectedCountry(countryCode);
        setModalVisible(false);
    };
    
    const handleCall = async () => {
        if (!celNum) {
          Alert.alert('Error', 'Por favor ingrese número');
          return;
        }
    
        try {
            // Obtener el prefijo del país seleccionado
            const selectedCountryData = countries.find(country => country.code === selectedCountry);
            const countryPrefix = selectedCountryData ? selectedCountryData.prefix : '+52';
            
            // Formatear número para llamada
            let formattedNumber = celNum;
            if (!celNum.startsWith('+')) {
                formattedNumber = countryPrefix + celNum;
            }
            
            // Limpiar número para llamada (solo números)
            const cleanNumber = formattedNumber.replace(/[^0-9+]/g, '');
            
            // Crear URL de llamada
            const callUrl = `tel:${cleanNumber}`;
            
            console.log('Abriendo llamada con:', callUrl);
            
            // Verificar si se puede hacer la llamada
            const canOpen = await Linking.canOpenURL(callUrl);
            
            if (canOpen) {
                await Linking.openURL(callUrl);
                Alert.alert('Éxito', 'Iniciando llamada telefónica');
            } else {
                Alert.alert('Error', 'No se puede realizar la llamada. Verifique que el dispositivo tenga capacidad de llamadas.');
            }
          } catch (error) {
            console.error('Error realizando llamada:', error);
            Alert.alert('Error', 'No se pudo realizar la llamada');
          }
        };
        
  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <StatusBar style="auto" />
          <Text style={styles.title}>Realizar Llamada</Text>
          
          <View style={styles.countryContainer}>
            <Text style={styles.label}>País:</Text>
            <TouchableOpacity 
              style={styles.countrySelector}
              onPress={() => setModalVisible(true)}
            >
              <Text style={styles.countryText}>
                {countries.find(c => c.code === selectedCountry)?.name} ({countries.find(c => c.code === selectedCountry)?.prefix})
              </Text>
              <Text style={styles.dropdownIcon}>▼</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.numberContainer}>
            <Text style={styles.label}>Número de teléfono:</Text>
            <View style={styles.numberInputContainer}>
              <Text style={styles.prefixText}>
                {countries.find(c => c.code === selectedCountry)?.prefix}
              </Text>
              <TextInput 
                style={styles.numberInput} 
                value={celNum} 
                onChangeText={setCellNum} 
                placeholder='1234567890' 
                keyboardType='phone-pad' 
              />
            </View>
          </View>
          
          <TouchableOpacity style={styles.button} onPress={handleCall}>
            <Text style={styles.buttonText}>📞 Realizar Llamada</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
      
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Seleccionar País</Text>
            <FlatList
              data={countries}
              keyExtractor={(item) => item.code}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.countryItem}
                  onPress={() => selectCountry(item.code)}
                >
                  <Text style={styles.countryItemText}>
                    {item.name} ({item.prefix})
                  </Text>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 30,
      color: '#333',
    },
    countryContainer: {
        width: '100%',
        marginBottom: 20,
    },
    numberContainer: {
        width: '100%',
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#333',
    },
    countrySelector: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 2,
        borderColor: '#FF6B35',
        borderRadius: 8,
        backgroundColor: '#f9f9f9',
        paddingHorizontal: 15,
        height: 50,
    },
    countryText: {
        fontSize: 16,
        color: '#333',
        flex: 1,
    },
    dropdownIcon: {
        fontSize: 12,
        color: '#FF6B35',
        marginLeft: 10,
    },
    numberInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#FF6B35',
        borderRadius: 8,
        backgroundColor: '#f9f9f9',
    },
    prefixText: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingHorizontal: 15,
        color: '#FF6B35',
        borderRightWidth: 1,
        borderRightColor: '#ddd',
    },
    numberInput: {
        flex: 1,
        height: 50,
        padding: 15,
        fontSize: 16,
    },
    button: {
        backgroundColor: '#FF6B35',
        paddingHorizontal: 30,
        paddingVertical: 15,
        borderRadius: 8,
        width: '100%',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        width: '90%',
        maxHeight: '80%',
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#333',
    },
    countryItem: {
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    countryItemText: {
        fontSize: 16,
        color: '#333',
    },
    closeButton: {
        backgroundColor: '#FF6B35',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        marginTop: 20,
        alignItems: 'center',
    },
    closeButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    }
  });