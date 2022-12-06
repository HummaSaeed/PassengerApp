import { StyleSheet, Text, View, Image, TextInput,ScrollView } from "react-native";
import React from "react";
import { Avatar } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import Logo from "../assets/signIn.png";
import BlackButton from "./components/BlackButton";

const SignUp = ({ navigation }) => {
  return (
      <ScrollView>
    <SafeAreaView
      style={{
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        backgroundColor: "white",
      }}
    >
      <Text style={styles.title}>Create Account</Text>
      <View
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <Avatar
          rounded
          size="large"
          source={{
            uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
          }}
          onPress={()=>{navigation.navigate('AddPicture')}}
        />
         <Text
          style={{
            fontSize: 12,
            fontWeight: "500",
            marginTop: 5,
            fontWeight: "500",
            textAlign:'center',
            paddingHorizontal:100
          }}
        >
         Please click on Camera icon to add profile picture
        </Text>
      </View>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <View style={styles.inputfields}>
          <TextInput placeholder={"First name"} />
        </View>
        <View style={styles.inputfields}>
          <TextInput placeholder={"SurName"} />
        </View>
      </View>
      <View style={styles.inputfield}>
        <TextInput placeholder={"Email"} />
      </View>
      <View style={styles.inputfield}>
        <TextInput placeholder={"Phone Number"} />
      </View>
      <View style={styles.inputfield}>
        <TextInput placeholder={"Password"} />
      </View>
      <View style={styles.inputfield}>
        <TextInput placeholder={"Confirm Password"} />
      </View>
      <View style={styles.inputfield}>
        <TextInput placeholder={"Address Trip 1"} />
      </View>
      <View style={styles.inputfield}>
        <TextInput placeholder={"Address Trip 2"} />
      </View>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <View style={styles.inputfields}>
          <TextInput placeholder={"Town/City"} />
        </View>
        <View style={styles.inputfields}>
          <TextInput placeholder={"Postal Address"} />
        </View>
      </View>
      <View style={{ marginTop: 10 }}>
        <BlackButton
          text={"Sign Up"}
          onPress={() => {
            navigation.navigate("AddProfile");
          }}
        />
      </View>
    </SafeAreaView>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    fontWeight: "800",
    margin: 7,
    color: "black",
    display: "flex",
  },
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
    shadowOpacity: 0.5,
    shadowRadius: 3,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 2,
  },
  inputfields: {
    height: 55,
    width: 150,
    backgroundColor: "white",
    marginRight: 10,
    borderWidth: 0,
    borderRadius: 5,
    zIndex: 1000,
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    padding: 10,
    shadowOpacity: 0.5,
    shadowRadius: 3,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 2,
  },
});
