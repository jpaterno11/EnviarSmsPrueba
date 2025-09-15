import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeStack from './stacks/HomeStack'
import SMSScreen from './screens/sms';
import WPPScreen from './screens/wpp';
import CALLScreen from './screens/call';

const RootStack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="HomeStack" screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="HomeStack" component={HomeStack} screenOptions={{ headerShown: false }} />
        <RootStack.Screen name="SMSScreen" component={SMSScreen} screenOptions={{ headerShown: false }} />
        <RootStack.Screen name="WPPScreen" component={WPPScreen} screenOptions={{ headerShown: false }} />
        <RootStack.Screen name="CALLScreen" component={CALLScreen} screenOptions={{ headerShown: false }} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}