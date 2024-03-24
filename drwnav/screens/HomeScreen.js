import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>welcome ashutosh you dogin wel ! </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("About-Us")}
        style={styles.button}
      >
        <Text style={{color:"white"}}>Go to About</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    paddingHorizontal: 10,
    fontWeight: "bold",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#007bff", // Change the background color
    borderRadius: 10, // Adjust the border radius
    paddingVertical: 10,
    paddingHorizontal: 30,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default HomeScreen;
