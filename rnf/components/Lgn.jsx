import React from 'react';
import { StyleSheet, View, StatusBar, Text, TextInput, SafeAreaView } from 'react-native';

const Lgn = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.loginform}>
        <Text>UserName </Text>
        <TextInput 
          placeholder='Enter your name'
        />
        <Text>Password</Text>
        <TextInput
          placeholder='Enter your password'
          secureTextEntry={true} // For hiding the password characters
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: StatusBar.currentHeight || 20, // Use a default value when StatusBar.currentHeight is undefined
    paddingHorizontal: 20,
    backgroundColor: "#f5f5f5",
  },
  loginform: {
    backgroundColor: "white",
    shadowColor: "black",
    padding: 10,
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 10,
  }
});

export default Lgn;
