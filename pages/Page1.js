import * as React from 'react'
import { Alert, Text, View, StyleSheet, TouchableOpacity, Dimensions, Image,StatusBar } from 'react-native'
import QRCodeScanner from 'react-native-qrcode-scanner';
import Modal from "react-native-modal";
import { RNCamera } from 'react-native-camera';
import LottieView from "lottie-react-native";
const { height, width } = Dimensions.get("screen")
let color="#fff"
function Page1() {
  const [qr, setqr] = React.useState("")
  const [message, setmesssage] = React.useState("")
  const [isVisible, setisvisible] = React.useState(false)

  const check = (qr) => {
    let text = qr[0] + qr[1] + qr[2];
    let text2 = qr[0] + qr[1] + qr[2] + qr[3] + qr[4] + qr[5];
    let text3 = qr[0] + qr[1] + qr[2] + qr[3] + qr[4] + qr[5] + qr[6] + qr[7] + qr[8];
    let text4 = qr[0] + qr[1] + qr[2] + qr[3] + qr[4] + qr[5] + qr[6] 

    if (text == "729" || text == "841" || text == "871" ||text == "730" || text2 == "139100" || text2 == "379300" || text2 == "440400" || text2 == "509500" || text3 == "839800629"||text4=="6224000") {
      setmesssage("مقاطعه")
    } else {
      setmesssage("أمان معانا")
    }


    setisvisible(true)
  }


  return (
    <>
    <StatusBar backgroundColor={"#a81621"}></StatusBar>
      <View style={style.contanier}>
        <QRCodeScanner
        
          onRead={({ data }) => {
            setqr(data)
             check(data)
          }}
          // flashMode={RNCamera.Constants.FlashMode.torch}
          reactivate={true}
          showMarker={true}
          // reactivateTimeout={500}
          topContent={
            <>
              <Text style={style.Text}>Scan QR</Text>
              {/* <Text style={style.Text}>{qr}</Text> */}
            </>
          }

        />

        <Modal style={style.modal} isVisible={isVisible}>
          <Text style={style.Text2}>{message}</Text>
          <Image source={message=="مقاطعه"?require("../images/mo2.jpg"):require("../images/mes.png")} style={style.image} resizeMode="contain" />
          <TouchableOpacity style={style.button} onPress={() => {
            setisvisible(false)
            setmesssage("")
            setqr("")
          }}>
            <Text style={style.textbutton}>بحث مره اخري</Text>
          </TouchableOpacity>
        </Modal>
      </View>
    </>
  )
}
const style = StyleSheet.create({
  contanier: {
    backgroundColor: color,
    height: height * .9,
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily:"cairo"

  },
  Text: {
    color: color,
    fontSize:20,
    fontFamily:"cairo"

  },
  Text2: {
    color: "#fff",
    fontSize:25,
    marginVertical:20,
    fontWeight:"bold",
    fontFamily:"cairo",


  },
  button: {
    padding: 15,
    backgroundColor: "#a81621",
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginTop: height * .02
  },
  modal: {
    width: width * .9,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: width * .8,
    height: height * .4,
    borderRadius: 10
  },textbutton:{
    fontSize:15,
    fontWeight:"bold",
    color:"#fff",
    fontFamily:"cairo"

  }
})

export default Page1