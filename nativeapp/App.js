import React from 'react';
import { SafeAreaView, SectionList, Text, View, StyleSheet } from 'react-native';

const data = [
  { title: 'Section 1', data: ['Item 1', 'Item 2', 'Item 3'] },
  { title: 'Section 2', data: ['Item 4', 'Item 5', 'Item 6'] },
  // Add more sections as needed
];

const MySectionList = () => {
  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={data}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Text>{item}</Text>}
        renderSectionHeader={({ section: { title } }) => (
          <View>
            <Text style={{ fontWeight: 'bold' }}>{title}</Text>
          </View>
        )} // Corrected closing bracket
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange'
  }
});

export default MySectionList;
