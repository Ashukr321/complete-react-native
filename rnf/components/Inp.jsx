import React, { useState } from 'react';
import { View,Switch, TextInput,Text, Alert, SafeAreaView, StyleSheet, Button, StatusBar } from 'react-native';

const Inp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message,setMessage] = useState("");

  const handleSubmit = () => {
    if (name.trim() === "" || email.trim() === "") {
      Alert.alert("Please enter both name and email");
      return;
    }
    Alert.alert(`${name} \n${email}`);
    setName("");
    setEmail("");
  }

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='Enter your Name !'
        value={name}
        secureTextEntry
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder='email.exmaple.com'
        value={email}
        keyboardType='number-pad'
        onChangeText={(text) => setEmail(text)}
      />

      <TextInput
        style={styles.multilinetext}
        placeholder='message'
        numberOfLines={10}
        value={message}
        multiline
        onChangeText={(text) => setMessage(text)}
      />

      <Button title='Submit' onPress={handleSubmit} />
      <View style={styles.switchContainer}>
        <Text>dark mode</Text>
        <Switch/>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginHorizontal:10,
    gap:10,

    paddingTop: StatusBar.currentHeight,
  },
  input: {
    padding: 10,
    borderWidth:1,
    fontSize: 15,

  },
  multilinetext:{
    textAlignVertical:"top",
    borderWidth:1,
  }
 ,
 switchContainer:{
  flexDirection:"row",
  justifyContent:"space-between",
  gap:10
 }
})

export default Inp;
