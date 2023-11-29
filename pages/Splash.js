
import * as React from 'react'
import { Alert, Text, View, StyleSheet, TouchableOpacity, Dimensions, Image, StatusBar } from 'react-native'

const { height, width } = Dimensions.get("screen")

function Splash() {

  return (
    <>
      <StatusBar backgroundColor={"#fff"}></StatusBar>
      <View style={style.contanier}>

        <Image source={require("../images/backg.jpg")} style={style.image} resizeMode="cover" />

      </View>
    </>
  )
}
const style = StyleSheet.create({
  contanier: {
    backgroundColor: "#fff",
    height: height * .9,
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "cairo"

  },
  image: {
    width: width,
    height: height
  }
})

export default Splash