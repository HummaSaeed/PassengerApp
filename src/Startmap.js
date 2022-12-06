import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import map from "../assets/map.png";
import CustomIcon from "react-native-vector-icons/Ionicons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import { Avatar } from "react-native-elements";
import BlackButton from "./components/BlackButton";

const Startmap = ({ navigation }) => {
  return (
    <View>
      <ImageBackground
        source={map}
        style={{ height: "100%" }}
      ></ImageBackground>
      <View
        style={{
          position: "absolute",
          bottom: 0,
          zIndex: 1000,
          display: "flex",
          backgroundColor: "white",
          width: "100%",
          height: 170,
          paddingTop: 30,
          paddingBottom: 10,
          paddingLeft: 20,
          paddingRight: 20,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          width: 360,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "700" }}>Waiting for ...</Text>

        <Text style={{ fontSize: 14, fontWeight: "400",marginBottom:20 }}>
          Driver that has yet to be allocated
        </Text>
        <View
          style={{
            display: "flex",
            marginTop: 20,
            flexDirection: "row",
            marginTop: 10,
          }}
        >
          <BlackButton
            text={"Cancel Booking"}
            onPress={() => {
              navigation.navigate("Location");
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default Startmap;

const styles = StyleSheet.create({
  head: {
    fontSize: 20,
    fontWeight: "800",
    display: "flex",
    color: "#F164b2",
    padding: 2,
  },
  button: {
    backgroundColor: "black",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 45,
    paddingRight: 45,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    width: 150,
    marginRight: 10,
  },
  buttontext: {
    backgroundColor: "black",
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3,
    width: 150,
    marginRight: 10,
  },
  buttonyes: {
    backgroundColor: "black",
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 10,
    paddingRight: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3,
    width: 120,
    marginRight: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 15,
    fontWeight: "500",
  },
  buttonTextstart: {
    color: "white",
    fontSize: 15,
    fontWeight: "500",
  },
  buttonTextyes: {
    color: "#F164b2",
    fontSize: 15,
    fontWeight: "500",
  },
});
