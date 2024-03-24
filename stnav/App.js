import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen'; // Using a more descriptive name for the 
import AboutScreen from './screens/AboutScreen';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
           
        />

        <Stack.Screen
          name='About'
          component={AboutScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
