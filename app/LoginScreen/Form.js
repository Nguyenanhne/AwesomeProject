import React, { useState } from 'react';
import { View, Image, StyleSheet, useWindowDimensions } from 'react-native';
import logo from '../../assets/images/image.png';
import Colors from '../Utils/Colors';
import CustomInput from './CustomInput';
import CustomButton from './CustomButton';

function DetailsScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const {height} = useWindowDimensions();
  return (
    <View style = {styles.root}>
      <Image source = {logo} style = {styles.logo} height ={height*0.3} resizeMethod = "auto"/>
      <CustomInput placeholder= "Username" value={username} setValue = {setUsername} secureTextEntry={false}/>
      <CustomInput placeholder= "Password" value={password} setValue = {setPassword} secureTextEntry={true}/>
      <CustomButton text={"Login"} type = {"PRIMARY"} onPress={()=>console.warn("Login")}/>
      <CustomButton 
        text={"Forgot Password"} 
        type = {"TERTIARY"} 
        onPress={()=>console.warn("Forgot Password")}
      />
      <CustomButton 
        text={"Login with Faceboook"}
        bgColor={"#E7EAF4"} 
        textColor={"#4765A9"} 
        type = {"PRIMARY"} 
        onPress={()=>console.warn("Login with Facebook")}
      />
      <CustomButton 
        text={"Login with Google"} 
        bgColor={"#FAE9EA"} 
        textColor={"#DD4D44"} 
        type = {"PRIMARY"}
        marginTop={10}
        onPress={()=>console.warn("Login with Google")}
      />
      <CustomButton 
        text={"Login with TikTok"} 
        bgColor={"#e3e3e3"} 
        textColor={"#363636"} 
        type = {"PRIMARY"}         
        marginTop={10}
        onPress={()=>console.warn("Login with Tiktok")}
      /> 
      <CustomButton 
        text={"Don't have an account? Create one"} 
        type = {"TERTIARY"} 
        onPress={()=>console.warn("Create one")}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  root:{
    flex: 1,
    backgroundColor: Colors.WHITE,
    alignItems: "center",
    paddingTop: 50,
    padding: 20,
  },
  logo: {
    width: "70%",
    maxHeight: 200,
    maxWidth: 300,
    borderRadius: 30
  }
})
export default DetailsScreen;