import React from 'react';
import { ScrollView,Alert } from 'react-native';
import Mdl from './components/Mdl';



export default function App() {
  const handlePress = () => {
    Alert.alert('welcome Ashutosh', 'today is day1 ', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      { text: 'OK ' },
    ]);
  };

  return (
    <ScrollView style={{backgroundColor:"orange" , padding:20}} >
      <Mdl/>
    </ScrollView>
  );
}

