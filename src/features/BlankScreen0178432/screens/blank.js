import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = {}

  render = () => (
    <ImageBackground style={styles.ImageBackground_1}>
      <Image source={{ uri: "https://via.placeholder.com/150" }} />
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16
  },

  View_1: { fontFamily: "Roboto-Regular" },
  ImageBackground_1: { fontFamily: "Roboto-Regular" },
  View_3: {},
  ImageBackground_1: {
    fontFamily: "Roboto-Regular",
    alignContent: "center",
    borderStyle: "dotted"
  },

  View_3: {},
  Button_131: {},
  Button_134: {},
  ImageBackground_1: {
    fontFamily: "Roboto-Regular",
    alignContent: "center",
    borderStyle: "dotted",
    backgroundSize: "contain"
  },

  View_3: {},
  Button_131: {},
  Button_134: {},
  ImageBackground_1: {
    fontFamily: "Roboto-Regular",
    alignContent: "center",
    borderStyle: "dotted",
    backgroundSize: "contain"
  },
  Image_4: {}
})
