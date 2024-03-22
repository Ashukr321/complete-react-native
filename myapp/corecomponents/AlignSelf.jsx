import { StyleSheet, View,Text } from 'react-native'

const AlignSelf = () => {
  return (
    <View>
    <View style={styles.container1}>

    
        <View style={styles.box1}></View>
        <View style={styles.box2}>
          <Text style={{display:"flex",alignSelf:"center",textTransform:"uppercase"}}>
            this is amazing
          </Text>
        </View>
        <View style={styles.box3}></View>
        <View></View>
    </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container1: {
    height:"100%",
    backgroundColor:"pink",
  },
  box1:{
    width:"100%",
    height:100,
    backgroundColor:"red",
    alignSelf:"flex-end",// this will work acroos the cross axis

  },
  box2:{
    height:100,
    width:"100%",
    justifyContent:"center",
    backgroundColor:"orange",
  }
  ,
  box3:{
    height:100,
    width:"100%",
    backgroundColor:"yellow",
    alignSelf:'flex-start',
    borderRadius:10,

  }
})

export default AlignSelf