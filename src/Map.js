import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import map from "../assets/map.png";
import CustomIcon from "react-native-vector-icons/AntDesign";

const Map = ({navigation}) => {
  return (
    // <SafeAreaView
    // style={{
    //   display: "flex",
    //   alignItems: "center",
    //   justifyContent: "center",
    //   flexDirection: "column",
    //   width: "100%",
    //   backgroundColor: "white",
    //   height: "100%",
    // }}>

    <ImageBackground source={map} style={{ height: "100%" }}>
      <View
        style={{
          position: "absolute",
          bottom: 0,
          paddingVertical: 20,
          paddingHorizontal: 15,
        }}
      >
        <Text style={{ fontSize: 25, fontWeight: "700" }}>
          Where you want to go?
        </Text>
        <View style={styles.inputfield}>
          <Text style={{ color: "grey" }}>Enter your Destination</Text>
          <TouchableOpacity
            style={{
              width: 30,
              height: 30,
              backgroundColor: "black",
              borderRadius: 5,
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={()=>{navigation.navigate('YourJourney')}}
          >
            <CustomIcon name="search1" color="#F164b2" size={18} />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
    //   </SafeAreaView>
  );
};

export default Map;

const styles = StyleSheet.create({
  inputfield: {
    height: 45,
    width: 310,
    backgroundColor: "white",
    borderWidth: 0,
    borderRadius: 5,
    zIndex: 1000,
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-between",
    shadowOpacity: 0.5,
    shadowRadius: 3,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 2,
  },
});
