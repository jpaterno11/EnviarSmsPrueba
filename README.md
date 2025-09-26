# 📱 EnviarSmsPrueba

Una aplicación móvil desarrollada con React Native y Expo que permite enviar SMS, mensajes de WhatsApp y realizar llamadas telefónicas de manera nativa desde el dispositivo.

## 🚀 Características Principales

### 📨 Envío de SMS
- Envío nativo de SMS usando la aplicación de mensajes del dispositivo
- Integración con `expo-sms` para máxima compatibilidad
- Validación de campos y manejo de errores
- Interfaz intuitiva con selector de país

### 💬 Integración con WhatsApp
- Apertura de WhatsApp con mensaje pre-llenado
- Formateo automático de números telefónicos
- Verificación de disponibilidad de la aplicación
- Enlace directo usando `react-native-linking`

### 📞 Llamadas Telefónicas
- Realización de llamadas nativas usando la app de teléfono
- Formateo automático con prefijos de país
- Validación de capacidad de llamadas del dispositivo
- Interfaz consistente con el resto de la aplicación

### 🌍 Selector de Países
- Más de 100 países disponibles con sus respectivos prefijos
- Interfaz modal desplegable para selección
- Formateo automático de números según el país seleccionado
- Datos centralizados en archivo JSON para fácil mantenimiento

## 🛠️ Tecnologías Utilizadas

- **React Native**: Framework principal para desarrollo móvil
- **Expo**: Plataforma de desarrollo y herramientas
- **JavaScript**: Lenguaje de programación
- **React Hooks**: Gestión de estado (useState)
- **Expo SMS**: Librería para envío de SMS nativo
- **React Native Linking**: Para apertura de aplicaciones externas
- **React Native Picker**: Selector de países mejorado

## 📋 Requisitos del Sistema

- Node.js (versión 14 o superior)
- npm
- Expo CLI

## 🔧 Instalación y Configuración

### 1. Clonar el Repositorio
```bash
git clone [URL_DEL_REPOSITORIO]
cd EnviarSmsPrueba
```

### 2. Instalar Dependencias
```bash
npm install
```

### 3. Iniciar la Aplicación
```bash
npm start
# o
expo start
```

### 4. Ejecutar en Dispositivo
- Escanear el código QR con la app Expo Go

## 📁 Estructura del Proyecto

```
EnviarSmsPrueba/
├── assets/
│   ├── countries.json          # Datos de países y prefijos
│   ├── icon.png               # Icono de la aplicación
│   ├── splash-icon.png        # Icono de splash screen
│   ├── adaptive-icon.png      # Icono adaptativo
│   └── favicon.png            # Favicon
├── screens/
│   ├── sms.js                 # Pantalla de envío de SMS
│   ├── wpp.js                 # Pantalla de WhatsApp
│   ├── call.js                # Pantalla de llamadas
│   └── call.js                # Pantalla de llamadas (duplicado)
├── stacks/
│   └── HomeStack.js           # Navegación principal
├── App.js                     # Componente principal
├── index.js                   # Punto de entrada
├── package.json               # Dependencias y scripts
└── README.md                  # Este archivo
```

## 🎨 Diseño y UX

### Paleta de Colores
- **SMS**: Azul (#007AFF) - Representa confiabilidad y comunicación
- **WhatsApp**: Verde (#25D366) - Colores oficiales de WhatsApp
- **Llamadas**: Naranja (#FF6B35) - Representa energía y acción

### Características de UI
- **Diseño Responsivo**: Adaptable a diferentes tamaños de pantalla
- **Selector de Países**: Modal desplegable con más de 100 países
- **Validación en Tiempo Real**: Feedback inmediato al usuario
- **Cerrar Teclado**: Tocar fuera de inputs cierra el teclado automáticamente
- **Iconos Descriptivos**: Emojis y símbolos para mejor comprensión

## 🔒 Funcionalidades de Seguridad

- **Validación de Entrada**: Verificación de números telefónicos válidos
- **Manejo de Errores**: Alertas informativas para el usuario
- **Verificación de Capacidades**: Comprobación de funcionalidades del dispositivo
- **Formateo Seguro**: Limpieza de caracteres no deseados en números

## 🚀 Características Técnicas

### Gestión de Estado
- Uso de React Hooks para estado local
- Estados para número de teléfono, mensaje, país seleccionado y modal

### Navegación
- Implementación con React Navigation
- Navegación por pestañas (Bottom Tabs)
- Transiciones suaves entre pantallas

### Persistencia de Datos
- Datos de países en archivo JSON centralizado
- Fácil mantenimiento y actualización de países