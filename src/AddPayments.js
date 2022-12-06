import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import BackButton from "./components/BackButton";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import CustomIcon from "react-native-vector-icons/EvilIcons";
import Feather from "react-native-vector-icons/Feather";
import BlackButton from "./components/BlackButton";
const AddPayments = ({navigation}) => {
  const [showdropdown, setshowdropdown] = useState(false);
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
        <Text style={styles.title}>Add Payment</Text>
      </View>
      <Text
        style={{
          fontSize: 26,
          fontWeight: "700",
          margin: 10,
          color: "black",
          marginLeft: 40,
        }}
      >
        Select payment method
      </Text>
      <View style={styles.inputfield}>
        <Text style={{ color: "grey" }}>Enter your Destination</Text>
        <TouchableOpacity
          style={{
            width: 30,
            height: 30,
            borderRadius: 5,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => {
            setshowdropdown(true);
          }}
        >
          <MaterialIcons name="keyboard-arrow-down" color="#F164b2" size={20} />
        </TouchableOpacity>
      </View>
      {showdropdown ? (
        <View
          style={{
            marginTop: 0,
            height: 180,
            width: 310,
            marginLeft: 30,
            marginRight: 30,
            borderRadius: 15,
            backgroundColor: "white",
            paddingHorizontal: 10,
            paddingTop: 14,
            shadowOpacity: 0.7,
            shadowRadius: 3,
            shadowOffset: {
              height: 0,
              width: 0,
            },
            elevation: 2,
          }}
        >
          <View
            style={{
              display: "flex",
              borderBottomWidth: 1,
              borderBottomColor: "#E8E8E8",
              flexDirection: "row",
              paddingVertical: 8,
              alignItems: "center",
            }}
          >
            <Feather name="circle" color="grey" />
            <Text style={{ marginLeft: 5, fontSize: 12, fontWeight: "500" }}>
              Debit card
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              borderBottomWidth: 1,
              borderBottomColor: "#E8E8E8",
              flexDirection: "row",
              paddingVertical: 8,
              alignItems: "center",
            }}
          >
            <Feather name="circle" color="grey" />
            <Text style={{ marginLeft: 5, fontSize: 12, fontWeight: "500" }}>
              Credit card
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              borderBottomWidth: 1,
              borderBottomColor: "#E8E8E8",
              flexDirection: "row",
              paddingVertical: 8,
              alignItems: "center",
            }}
          >
            <Feather name="circle" color="grey" />
            <Text style={{ marginLeft: 5, fontSize: 12, fontWeight: "500" }}>
              Pay pal
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              borderBottomWidth: 1,
              borderBottomColor: "#E8E8E8",
              flexDirection: "row",
              paddingVertical: 8,
              alignItems: "center",
            }}
          >
            <Feather name="circle" color="grey" />
            <Text style={{ marginLeft: 5, fontSize: 12, fontWeight: "500" }}>
              Apple key
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              borderBottomWidth: 1,
              borderBottomColor: "#E8E8E8",
              flexDirection: "row",
              paddingVertical: 8,
              alignItems: "center",
            }}
          >
            <Feather name="circle" color="grey" />
            <Text style={{ marginLeft: 5, fontSize: 12, fontWeight: "500" }}>
              Cash
            </Text>
          </View>
          <View
            style={{ display: "flex", alignItems: "center", marginTop: 10 }}
          >
            <BlackButton text={"Next"} onPress={()=>{navigation.navigate('AddCard')}}/>
          </View>
        </View>
      ) : null}
    </View>
  );
};

export default AddPayments;

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    fontWeight: "700",
    margin: 10,
    color: "black",
    marginLeft: 10,
  },
  inputfield: {
    height: 45,
    width: 310,
    backgroundColor: "white",
    borderWidth: 0,
    borderRadius: 5,
    zIndex: 1000,
    marginTop: 0,
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
    marginLeft: 30,
  },
});
