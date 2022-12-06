import {
  StyleSheet,
  Text,
  View,
 
} from "react-native";
import React from "react";
import { Avatar } from "react-native-elements";

import BackButton from "./components/BackButton";
import BlackButton from "./components/BlackButton";

const AddPicture = ({navigation}) => {
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
        <Text style={styles.title}>Add Photo</Text>
      </View>
      <View style={{ display: "flex", alignItems: "center", marginTop: 10 }}>
        <Avatar
          rounded
          size="large"
          source={{
            uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
          }}
          onPress={() => {
            navigation.navigate("AddPicture");
          }}
        />
        <Text
          style={{
            fontSize: 14,
            fontWeight: "500",
            marginTop: 5,
            fontWeight: "500",
            textAlign: "center",
            paddingHorizontal: 100,
          }}
        >
          Choose Photo
        </Text>
      </View>
      <View style={{marginTop:60,alignItems:'center'}}>
          <BlackButton text={"Next"} onPress={()=>{navigation.navigate('Car')}}/>

      </View>
    </View>
  );
};

export default AddPicture;

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    fontWeight: "700",
    margin: 10,
    color: "black",
    marginLeft: 10,
  },
});
