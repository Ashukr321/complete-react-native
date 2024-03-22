import React, { useState } from "react";
import { View, Text, Button, Modal, StyleSheet } from "react-native";

const Mdl = () => {
  const [isVisibleModel, setVisibleModel] = useState(false);
  
  return (
    <View>
      <Text
        style={{
          textAlign: "center",
          marginBottom: 10,
          fontSize: 16,
          color: "white",
        }}
      >
        Welcome to learn about React Native
      </Text>
      <Button
        title="Click me"
        onPress={() => setVisibleModel(true)}
      />

      <Modal
        transparent={true}
        visible={isVisibleModel}
        animationType="fade"
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={{ textAlign: "center", marginBottom: 10 }}>
              This is the modal page of the app. Thank you.
            </Text>
            <Button title="Close" onPress={() => setVisibleModel(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // semi-transparent background
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },
});

export default Mdl;
