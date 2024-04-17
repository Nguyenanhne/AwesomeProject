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
      <CustomButton/>
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