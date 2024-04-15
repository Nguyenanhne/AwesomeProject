import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import Colors from '../Utils/Colors';
export default function Login() {
  return (
    <View style ={{alignItems:"center"}}>
      <Image 
        source={{uri: 'https://blz04pap005files.storage.live.com/y4mJcOwAR2wZyKctaTgYdihiYZgt96oZ167GJ_YJHgz_aCwg3HJnKDc5xjeVyTdYLu4VBQz-cde3-iVJ67q6ReKVZaLaqBT43-1BlET13RAAEcmcofIYVz9-H1u7fZjD-3dcaGaY6NIOQ-j0JELkca54qYSCLwANKnj27RuyztUI3QFqPb3pkBYkDNJ2Ztb6SFDOJQC6snKORZC0sIxrOjEwA?encodeFailures=1&width=331&height=712'}}
        style={styles.loginImage}
      />
      <View style = {styles.subContainer}>
        <Text style={{fontSize: 27, color: Colors.WHITE}}>
            Let's find Professional Cleaning and repair Service
        </Text>
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
    backgroundColor:  Colors.PRIMARY,
    height: "70%",
    marginTop: - 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20
  }
});
