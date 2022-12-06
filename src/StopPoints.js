import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import BackButton from "./components/BackButton";
import CustomIcon from "react-native-vector-icons/EvilIcons";
import CustomIcon1 from "react-native-vector-icons/AntDesign";
import BlackButton from "./components/BlackButton";

const StopPoints = ({navigation}) => {
  return (
    <View style={{ backgroundColor: "white", height: "100%", width: "100%" }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginTop: 15,
          marginHorizontal: 20,
        }}
      >
        <BackButton />
        <Text style={styles.title}>Stop Points</Text>
      </View>
      <View
        style={{
          paddingHorizontal: 25,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            paddingLeft: 20,
            paddingRight: 40,
            paddingVertical: 5,
            backgroundColor: "#fde8f3",
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            borderRadius: 10,
            width: 130,
          }}
        >
          <CustomIcon name="pencil" size={18} />
          <Text>00.10</Text>
        </View>
        <View
          style={{
            paddingHorizontal: 20,
            paddingVertical: 5,
            backgroundColor: "#fde8f3",
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            borderRadius: 10,
            width: 130,
          }}
        >
          <CustomIcon name="pencil" size={18} />
          <Text>00.10</Text>
        </View>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 20,
          marginTop: 10,
        }}
      >
        <Text style={{ fontWeight: "500", fontSize: 14 }}>Pickup</Text>
        <View
          style={{
            backgroundColor: "grey",
            width: 270,
            height: 1,
            marginLeft: 1,
          }}
        ></View>
      </View>
      <View
        style={{
          paddingLeft: 20,
          paddingRight: 40,
          paddingVertical: 5,
          backgroundColor: "#fde8f3",
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          borderRadius: 10,
          width: 330,
          marginLeft: 20,
          marginTop: 40,
        }}
      >
        <CustomIcon name="pencil" size={18} />
        <Text>Pickup 2</Text>
      </View>
      <View
        style={{
          paddingLeft: 20,
          paddingRight: 40,
          paddingVertical: 5,
          backgroundColor: "#fde8f3",
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          borderRadius: 10,
          width: 330,
          marginLeft: 20,
          marginTop: 20,
        }}
      >
        <CustomIcon name="pencil" size={18} />
        <Text>Pickup 2</Text>
      </View>
      <View
        style={{
          paddingLeft: 20,
          paddingRight: 40,
          paddingVertical: 5,
          backgroundColor: "#fde8f3",
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          borderRadius: 10,
          width: 330,
          marginLeft: 20,
          marginTop: 50,
        }}
      >
        <CustomIcon name="pencil" size={18} />
        <Text>Pickup 2</Text>
      </View>
      <View
        style={{
          paddingLeft: 20,
          paddingRight: 40,
          paddingVertical: 5,
          backgroundColor: "#fde8f3",
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          borderRadius: 10,
          width: 330,
          marginLeft: 20,
          marginTop: 20,
        }}
      >
        <CustomIcon name="pencil" size={18} />
        <Text>Pickup 2</Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 20,
          marginTop: 10,
        }}
      >
        <Text style={{ fontWeight: "500", fontSize: 14 }}>Destination</Text>
        <View
          style={{
            backgroundColor: "grey",
            width: 270,
            height: 1,
            marginLeft: 1,
          }}
        ></View>
      </View>
      <View style={styles.inputfield}>
      <Text style={{ color: "grey" }}></Text>
        <TouchableOpacity
          style={{
            width: 30,
            height: 30,
            backgroundColor: "black",
            borderRadius: 5,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => {
            navigation.navigate("YourJourney");
          }}
        >
          <CustomIcon1 name="search1" color="#F164b2" size={18} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginTop: 20,
          height: 180,
          width: 300,
          marginLeft: 30,
          marginRight: 30,
          borderRadius: 15,
          backgroundColor: "white",
          paddingHorizontal: 10,
          paddingTop: 14,
          shadowOpacity: 0.5,
          shadowRadius: 3,
          shadowOffset: {
            height: 0,
            width: 0,
          },
          elevation: 2,
        }}
      >
        <Text style={{ color: "grey" }}>Note Your Driver</Text>
      </View>
      <View style={{alignItems:'center',marginTop:20}}>
      <BlackButton text={"Next"} onPress={()=>{navigation.navigate('AddPayments')}}/>
      </View>
    </View>
  );
};

export default StopPoints;

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    fontWeight: "600",
    margin: 10,
    color: "black",
    marginLeft: 30,
  },
  inputfield: {
    height: 45,
    width: 340,
    backgroundColor: "white",
    borderWidth: 0,
    borderRadius: 5,
    zIndex: 1000,
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    alignItems:'center',
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
