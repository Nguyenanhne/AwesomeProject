import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import Colors from '../Utils/Colors';

export default function Login({ navigation }) {
  return (
    <View style={{ alignItems: "center" }}>
      <Image 
        source={{uri: 'https://blz04pap005files.storage.live.com/y4mJcOwAR2wZyKctaTgYdihiYZgt96oZ167GJ_YJHgz_aCwg3HJnKDc5xjeVyTdYLu4VBQz-cde3-iVJ67q6ReKVZaLaqBT43-1BlET13RAAEcmcofIYVz9-H1u7fZjD-3dcaGaY6NIOQ-j0JELkca54qYSCLwANKnj27RuyztUI3QFqPb3pkBYkDNJ2Ztb6SFDOJQC6snKORZC0sIxrOjEwA?encodeFailures=1&width=331&height=712'}}
        style={styles.loginImage}
      />
      <View style={styles.subContainer}>
        <Text style={{ fontSize: 27, color: Colors.WHITE, textAlign: "center" }}>Let's find 
          <Text style={{ fontWeight: "bold" }}> Professional Cleaning and repair </Text>
          <Text> Service</Text>
        </Text>
        <Text style={{ fontSize: 17, color: Colors.WHITE, textAlign: "center", marginTop: 20 }}>
          Best App to find services near you which deliver you a professionally service
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Form")}>
          <Text style={{ textAlign: "center", fontSize: 17, color: Colors.PRIMARY }}>Let's Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loginImage: {
    width: 230,
    height: 450,
    marginTop: 70,
    borderWidth: 4,
    borderColor: Colors.BLACK,
    borderRadius: 15
  },
  subContainer: {
    width: "100%",
    backgroundColor: Colors.PRIMARY,
    height: "70%",
    marginTop: -20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20
  },
  button: {
    padding: 15,
    backgroundColor: Colors.WHITE,
    borderRadius: 99,
    marginTop: 40
  }
});
