import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from './src/navigation/AppNavigator.jsx';

export default function App() {
  return (
    //este da formato a la pantalla
    <SafeAreaProvider>
      <AppNavigator/>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}

