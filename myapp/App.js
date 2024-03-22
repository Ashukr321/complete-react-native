import React from 'react';
import {  Dimensions, View, StatusBar, TouchableOpacity } from 'react-native';
import Flw from './corecomponents/Flw';



export default function App() {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  
  return (
    <View>
      <StatusBar backgroundColor={"purple"} barStyle={"light-content"} />
        <Flw/>
    </View> 
  );
}

