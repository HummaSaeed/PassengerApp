import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import map from "../assets/map.png";
import { Avatar } from "react-native-elements";

const Location = () => {
  const [progressJobs, setprogressJobs] = useState(false);
  return (
    <View>
      <TouchableOpacity
        style={{
          position: "absolute",
          top: 30,
          right: 30,
          backgroundColor: "white",
          alignItems: "center",
          justifyContent: "center",
          shadowOpacity: 0.5,
          shadowRadius: 3,
          shadowOffset: {
            height: 0,
            width: 0,
          },
          elevation: 2,
        }}
      >
       
      </TouchableOpacity>
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
          height: 200,
          paddingTop: 30,
          paddingBottom: 10,
          paddingLeft: 20,
          paddingRight: 20,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          width: 360,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <View style={{ width: "100%" }}>
            <Text
              style={{
                fontSize: 12,
                fontWeight: "500",
                display: "flex",
                color: "#F164b2",
                padding: 3,
                marginLeft: 40,
              }}
            >
              IN PROGRESS
            </Text>

            <View style={{ display: "flex", flexDirection: "row" }}>
              <Avatar
                rounded
                source={{
                  uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
                }}
                size={50}
              />
              <View>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "700",
                    display: "flex",
                    color: "black",
                    padding: 3,
                  }}
                >
                  User Name
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "700",
                    display: "flex",
                    color: "#F164b2",
                    padding: 3,
                  }}
                >
                  AJ XCS
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "500",
                    display: "flex",
                    color: "black",
                    padding: 3,
                  }}
                >
                  TOYOTA Y WARIS
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={{ display: "flex", flexDirection: "row", marginTop: 10 }}>
          <TouchableOpacity style={styles.buttontext}>
            <Text style={styles.buttonTextyes}>Cancel Rides</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttontext}
            onPress={() => {
              navigation.navigate("PickUpLocation");
            }}
          >
            <Text style={styles.buttonTextyes}>Call</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Location;

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
