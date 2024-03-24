import React from 'react'
import { View,Text ,StyleSheet, Button} from 'react-native'

const AboutScreen = ({navigation}) => {
  return (
    <View style={styles.contianer}>
      <Text style={styles.title}>this is About us Page</Text>
      <Button title='Go to Home' onPress={() => navigation.navigate("Home")}/>
    </View>
  )
}

const styles = StyleSheet.create({
  contianer:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title:{
    fontWeight:"bold",
    paddingHorizontal:10,
    textTransform:"uppercase",
    letterSpacing:2,
    marginBottom: 10,
  }
})
export default AboutScreen