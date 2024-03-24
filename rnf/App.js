import React, { useState } from 'react';
import { StyleSheet, View, StatusBar,Alert,Image, Text, TextInput, SafeAreaView, Button } from 'react-native';


const App = () => {
  const [name,setName]= useState("");
  const [password,setPassword]= useState("");
  const formsubmit = () => {
    if(name.trim()===""|| password.trim()=== ""){
      Alert.alert("Please enter both name and password");
    }else{
      Alert.alert(`${name} and ${password}`);
      setName("");
      setPassword("");
    }
  
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.loginform}>
      <Image source={require('./assets/adaptive-icon.png')} style={styles.image}/>
        <Text style={styles.label}>UserName </Text>
        <TextInput 
        style={styles.input}
        onChangeText={(text)=>setName(text)}
          placeholder='Enter your name'
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder='Enter your password'
          onChangeText={(text)=>setPassword(text)}
          secureTextEntry={true} // For hiding the password characters
        />
        <Button title='login' onPress={formsubmit}/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal:20,
    paddingTop: StatusBar.currentHeight || 20, // Use a default value when StatusBar.currentHeight is undefined
    
    backgroundColor: "#f5f5f5",
  },
  loginform: {
    backgroundColor: "white",
    shadowColor: "black",
    padding: 20,
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 10,
  },
  label:{
    fontSize: 20,
    fontWeight:"400",
    marginBottom:10,
  },
  input :{
    borderWidth:1,
    height:40,
    marginBottom:15,
    padding:10,
    borderRadius:5,
  },
  image:{
    width:200,
    height:200,
    alignSelf:"center",
    marginBottom:15,
  }
});

export default App;
