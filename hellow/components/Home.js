import React, { useState } from "react";
import {  Text, StyleSheet,ScrollView, TextInput, Alert, Button,Image,Model } from "react-native";
const Home = () => {

  const [inputValue, setInputValue] = useState("");
 
  const handleInput = () => {
    if(inputValue===""){
      Alert.alert("Error", "Please enter your name");
    }else{
      Alert.alert("Welcome", inputValue);
      setInputValue("");
    }
   
  };
  return (
    <>
    <ScrollView>
      <Text style={styles.text}>Welcome to Ashutosh Kumar</Text>
      <TextInput 
        value={inputValue} 
        onChangeText={(text) => setInputValue(text)} 
        style={styles.input} 
        placeholder="Enter your name"
      />
      <Button title="Submit" onPress={handleInput} />

      <Text>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, assumenda vero suscipit temporibus eum, atque numquam praesentium voluptates totam laboriosam, blanditiis perspiciatis fugit! Nihil, voluptates pariatur? Laboriosam nam eos ducimus vitae distinctio hic sapiente quae asperiores quibusdam perferendis aperiam odio delectus, doloremque iusto rerum, ad molestias minima labore id modi? Ipsa soluta blanditiis repellendus officiis, a fuga, reiciendis perspiciatis quos aperiam, odit minima. Ea accusantium quam iusto itaque ducimus tempora repudiandae, aliquam excepturi voluptatem exercitationem cum sint aperiam ipsa nostrum aspernatur illo nulla repellat ab, fuga maiores ullam ad rem, blanditiis asperiores! Incidunt laboriosam omnis at ipsam sapiente quisquam ad. Quis est ducimus incidunt quo quaerat sit facere, accusamus ea esse perspiciatis porro et numquam voluptates error vitae cupiditate, unde soluta blanditiis asperiores, molestiae maiores? Temporibus aspernatur non rerum aut unde enim eos dignissimos praesentium, repudiandae, distinctio veniam repellat! Quos minima eligendi eaque ipsum facere quisquam officia ducimus! Quibusdam, adipisci ad commodi inventore officiis molestiae, laboriosam numquam velit quia autem nostrum vitae enim cumque, facere nisi ex aspernatur delectus ipsam suscipit! Explicabo a similique commodi asperiores eveniet minima distinctio aut, dolorum odit tenetur autem tempora unde itaque blanditiis! Dolorum quisquam recusandae vel in beatae inventore labore quibusdam cupiditate cumque magni quaerat officia repellendus culpa dolor suscipit, quis iusto, expedita tempore quo. Temporibus eveniet nobis quia reprehenderit quasi laudantium voluptatum cumque hic veritatis ad accusamus, voluptas alias similique, magni odio dignissimos. Quidem amet debitis exercitationem aliquid voluptate commodi nam iure repudiandae nostrum, ut molestias ex soluta ipsum quod itaque eaque mollitia! Asperiores perspiciatis aliquam fugit delectus unde molestiae eos quaerat. Corrupti ratione atque commodi incidunt cum odio eveniet magni repudiandae architecto quos, laudantium sapiente sunt, officiis, omnis ducimus velit nihil saepe corporis doloribus voluptas vitae. Vero iste voluptatum, sed hic aliquam eveniet nulla quaerat ipsam. Quaerat optio veniam saepe vel similique? Ipsa saepe, atque illum iure ad pariatur dicta earum expedita sunt nihil. Quod facere necessitatibus voluptas voluptatem quos, nemo eos libero, eius aperiam similique odio? Error magni itaque voluptas possimus ex dignissimos ipsam aut similique veniam rerum voluptatum, hic eum quis nulla ut deserunt aperiam nisi laborum ad, architecto voluptate quam in ab. Accusantium rem magnam corrupti, sunt impedit quaerat quod, repellendus exercitationem dicta aliquam fugiat aliquid voluptas tempora? Ut sunt mollitia voluptatem, consequuntur laudantium, commodi numquam fugiat quia quisquam deleniti earum perferendis nisi magnam quibusdam quasi hic iste fugit odit nostrum assumenda voluptate exercitationem delectus quis placeat! Quisquam, impedit?
      </Text>
      <Image source={{uri:"https://cdn.pixabay.com/photo/2023/10/16/01/40/aviation-8318208_1280.jpg"}} style={{width:"100%",height:500,marginTop:20}}/>
      
    </ScrollView>

    </>


  );
};



const styles = StyleSheet.create({
  text: {
    color: "black",
    marginTop: 20,
    fontSize: 18,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    color:"white",
    paddingHorizontal: 15,
  },
});

export default Home;
