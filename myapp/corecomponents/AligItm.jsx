import React from 'react';
import { View, StyleSheet, Image } from 'react-native';


const AligItm = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri:"https://cdn.pixabay.com/photo/2023/10/10/15/20/swimming-pool-8306716_1280.jpg"  }}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: 'center',
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  }
});

export default AligItm;
