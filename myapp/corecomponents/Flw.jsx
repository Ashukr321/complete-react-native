import { View, Text, StyleSheet, ScrollView } from 'react-native';

const Flw = () => {
 
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={{ ...styles.box, ...styles.box1 }}>
        <Text>One</Text>
      </View>

      <View style={{ ...styles.box, ...styles.box2 }} >
        <Text style={{ color: 'white' }}>Two</Text>
      </View>

      <View style={{ ...styles.box, ...styles.box3 }} > 
        <Text>Three</Text>
      </View>

      <View style={{ ...styles.box, ...styles.box4 }} >
        <Text style={{ color: 'white' }}>Four</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {

    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: 'row',
    flexWrap:"wrap",
  },
  box: {
    height: 450, // Set the height of each box to your desired value
    width: '100%', // Set the width to fit two boxes in a row
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 10, // Added to create spacing between boxes
  },
  box1: {
    backgroundColor: 'violet',
  },
  box2: {
    backgroundColor: 'red',
  },
  box3: {
    backgroundColor: 'yellow',
  },
  box4: {
    backgroundColor: 'purple',
  },
});

export default Flw;
