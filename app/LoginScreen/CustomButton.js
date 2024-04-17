import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Colors from '../Utils/Colors'

export class CustomButton extends Component {
  render() {
    return (
      <View style = {styles.container}>
        <Text> Login </Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: Colors.BLUE,
        width: "100%",
        padding: 10,
        marginVertical: 5,
        borderRadius: 5  ,
        alignItems: "center",
    },

})
export default CustomButton
