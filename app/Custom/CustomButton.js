import React, { Component } from 'react'
import { Text, View, StyleSheet, Pressable } from 'react-native'
import Colors from '../Utils/Colors'

const CustomButton = ({onPress, text, type, bgColor, textColor, marginTop}) => {
  return (
      <Pressable onPress = {onPress}
        style = {[
          marginTop ? {marginTop: marginTop}:{},
          styles.container,
          styles[`container_${type}`],
          bgColor ? {backgroundColor: bgColor} :{},
        ]}>
        <Text style = {[
          styles.text,
          styles[`text_${type}`],
          textColor ? {color: textColor} :{}
          ]}> 
          {text} 
        </Text>
      </Pressable>
  );
}
const styles = StyleSheet.create({
    container:{
      justifyContent: "center",
      height: "7%",
      width: "100%",
      padding: 10,
      marginVertical: 5,
      borderRadius: 5  ,
      alignItems: "center",
    },
    container_PRIMARY:{
      backgroundColor: Colors.BLUE
    },
    container_TERTIARY:{
      backgroundColor: Colors.WHITE
    },
    text_PRIMARY: {
      color: "white",
      fontSize: 20
    },
    text_TERTIARY: {
      color: "grey",
    },
    text: {
      fontSize: 17,
      fontWeight: "bold",
    }

})
export default CustomButton
