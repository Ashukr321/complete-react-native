import {  View } from 'react-native';
import CalculatorApp from './components/CalculatorApp';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <NavigationContainer>
    <StatusBar backgroundColor="pink" barStyle="dark-content" />
      <CalculatorApp/>
    </NavigationContainer>
  );
}


