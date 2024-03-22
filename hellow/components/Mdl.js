import { Model,View,Button } from "react-native"
import { useState } from "react"
const Mdl = () => {
 const [isVisibleModel,setVisibleModel] =useState(false);
 const handleModel = ()=>{
  setVisibleModel(true);
 }
  return (
    <View>

    <View>
      <Button title="click me" onPress={handleModel} />
    </View>
    <Model visible={isVisibleModel}>
      <View>
        <Button title="Close"/>
      </View>
    </Model>
    </View>


  )
}

export default Mdl