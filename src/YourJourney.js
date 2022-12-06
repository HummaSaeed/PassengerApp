import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Modal from "react-native-modal";
import React, { useState } from "react";
import BlackButton from "./components/BlackButton";
import BackButton from "./components/BackButton";
import CustomIcon from "react-native-vector-icons/AntDesign";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const YourJourney = ({navigation}) => {
  const [showModal, setshowModal] = useState(false);
  const [showdateModal, setshowdateModal] = useState(false);
  return (
    <ScrollView>
      <Modal isVisible={showModal}>
        <View
          style={{
            backgroundColor: "white",
            width: 280,
            height: 220,
            justifyContent:'center'
          }}
        >
            <View
            style={{
              borderTopColor: "#C8C8C8",
              borderBottomColor: "#C8C8C8",
              borderTopWidth:1,
              borderBottomWidth:1,
              display: "flex",
              flexDirection: "row",
              
              alignItems:'center',
              justifyContent:'center'
            }}
          >
            <Text style={{ color: "#C8C8C8", marginLeft: 10,fontSize:24}}>12</Text>
            <Text style={{ color: "#C8C8C8", marginLeft: 10,fontSize:24 }}>12</Text>
            <Text style={{ color: "#C8C8C8", marginLeft: 10,fontSize:24 }}>AM</Text>
          </View>
          <View
            style={{
              borderTopColor: "#C8C8C8",
              borderBottomColor: "#C8C8C8", 
              display: "flex",
              flexDirection: "row",
              alignItems:'center',
              justifyContent:'center'
            }}
          >
            <Text style={{ color: "#C8C8C8", marginLeft: 10,fontSize:24}}>12</Text>
            <Text style={{ color: "#C8C8C8", marginLeft: 10,fontSize:24 }}>12</Text>
            <Text style={{ color: "#C8C8C8", marginLeft: 10,fontSize:24 }}>AM</Text>
          </View>
          <View
            style={{
              borderTopColor: "#696969",
              borderBottomColor: "#696969",
              borderTopWidth:1,
              borderBottomWidth:1,
              display: "flex",
              flexDirection: "row",
              alignItems:'center',
              justifyContent:'center'
            }}
          >
            <Text style={{ color: "#696969", marginLeft: 10,fontSize:24}}>12</Text>
            <Text style={{ color: "#696969", marginLeft: 10,fontSize:24 }}>12</Text>
            <Text style={{ color: "#696969", marginLeft: 10,fontSize:24 }}>AM</Text>
          </View>
          <View
            style={{
              borderTopColor: "#C8C8C8",
              borderBottomColor: "#C8C8C8", 
              display: "flex",
              flexDirection: "row",
              alignItems:'center',
              justifyContent:'center'
            }}
          >
            <Text style={{ color: "#C8C8C8", marginLeft: 10,fontSize:24}}>12</Text>
            <Text style={{ color: "#C8C8C8", marginLeft: 10,fontSize:24 }}>12</Text>
            <Text style={{ color: "#C8C8C8", marginLeft: 10,fontSize:24 }}>AM</Text>
          </View>
          
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              padding: 5,
              paddingLeft: 15,
            }}
          >
            <TouchableOpacity
              style={styles.buttontimer}
              onPress={() => {
                setshowModal(false);
              }}
            >
              <Text style={styles.buttonTextyes}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttontimer}>
              <Text style={styles.buttonTextyes}>Add</Text>
            </TouchableOpacity>
          </View>

          
        </View>
      </Modal>
      <Modal isVisible={showdateModal}>
        <View
          style={{
            backgroundColor: "white",
            width: 280,
            height: 220,
            justifyContent:'center'
          }}
        >
            <View
            style={{
              borderTopColor: "#C8C8C8",
              borderBottomColor: "#C8C8C8",
              borderTopWidth:1,
              borderBottomWidth:1,
              display: "flex",
              flexDirection: "row",
              
              alignItems:'center',
              justifyContent:'center'
            }}
          >
            <Text style={{ color: "#C8C8C8", marginLeft: 10,fontSize:24}}>12</Text>
            <Text style={{ color: "#C8C8C8", marginLeft: 10,fontSize:24 }}>September</Text>
            <Text style={{ color: "#C8C8C8", marginLeft: 10,fontSize:24 }}>AM</Text>
          </View>
          <View
            style={{
              borderTopColor: "#C8C8C8",
              borderBottomColor: "#C8C8C8", 
              display: "flex",
              flexDirection: "row",
              alignItems:'center',
              justifyContent:'center'
            }}
          >
            <Text style={{ color: "#C8C8C8", marginLeft: 10,fontSize:24}}>12</Text>
            <Text style={{ color: "#C8C8C8", marginLeft: 10,fontSize:24 }}>August</Text>
            <Text style={{ color: "#C8C8C8", marginLeft: 10,fontSize:24 }}>2022</Text>
          </View>
          <View
            style={{
              borderTopColor: "#696969",
              borderBottomColor: "#696969",
              borderTopWidth:1,
              borderBottomWidth:1,
              display: "flex",
              flexDirection: "row",
              alignItems:'center',
              justifyContent:'center'
            }}
          >
            <Text style={{ color: "#696969", marginLeft: 10,fontSize:24}}>12</Text>
            <Text style={{ color: "#696969", marginLeft: 10,fontSize:24 }}>November</Text>
            <Text style={{ color: "#696969", marginLeft: 10,fontSize:24 }}>2022</Text>
          </View>
          <View
            style={{
              borderTopColor: "#C8C8C8",
              borderBottomColor: "#C8C8C8", 
              display: "flex",
              flexDirection: "row",
              alignItems:'center',
              justifyContent:'center'
            }}
          >
            <Text style={{ color: "#C8C8C8", marginLeft: 10,fontSize:24}}>12</Text>
            <Text style={{ color: "#C8C8C8", marginLeft: 10,fontSize:24 }}>December</Text>
            <Text style={{ color: "#C8C8C8", marginLeft: 10,fontSize:24 }}>2022</Text>
          </View>
          
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              padding: 5,
              paddingLeft: 15,
            }}
          >
            <TouchableOpacity
              style={styles.buttontimer}
              onPress={() => {
                setshowdateModal(false);
              }}
            >
              <Text style={styles.buttonTextyes}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttontimer}>
              <Text style={styles.buttonTextyes}>Add</Text>
            </TouchableOpacity>
          </View>

          
        </View>
      </Modal>

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
          <Text style={styles.title}>Your Journey</Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 20,
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
        <View style={{ displa: "flex", alignItems: "center" }}>
          <View style={styles.inputfield}>
            <Text style={{ color: "grey" }}>Enter your Pickup location</Text>
            <TouchableOpacity
              style={{
                width: 30,
                height: 30,
                backgroundColor: "black",
                borderRadius: 5,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CustomIcon name="search1" color="#F164b2" size={18} />
            </TouchableOpacity>
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              padding: 5,
              paddingLeft: 15,
            }}
          >
            <TouchableOpacity
              style={styles.buttonyes}
              onPress={() => setshowModal(true)}
            >
              <Text style={styles.buttonText}>Set Time</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonyes} onPress={()=>setshowdateModal(true)}>
              <Text style={styles.buttonText}>Set Date</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.inputfield}>
            <Text style={{ color: "grey" }}>Number of passengers</Text>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 20,
            marginTop: 20,
          }}
        >
          <Text style={{ fontWeight: "500", fontSize: 14 }}>Destination</Text>
          <View
            style={{
              backgroundColor: "grey",
              width: 240,
              height: 1,
              marginLeft: 1,
            }}
          ></View>
        </View>
        <View style={{ displa: "flex", alignItems: "center" }}>
          <View style={styles.inputfield}>
            <Text style={{ color: "grey" }}>Enter your Destination</Text>
            <TouchableOpacity
              style={{
                width: 30,
                height: 30,
                borderRadius: 5,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CustomIcon name="search1" color="black" size={18} />
            </TouchableOpacity>
          </View>
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
        <View style={{ marginTop: 20, alignItems: "center" }}>
          <BlackButton text={"Next"} onPress={()=>{navigation.navigate('StopPoints')}}/>
        </View>
      </View>
    </ScrollView>
  );
};

export default YourJourney;

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    fontWeight: "700",
    margin: 10,
    color: "black",
    marginLeft: 10,
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
    marginTop: 20,
  },
  buttontimer: {
    backgroundColor: "white",
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
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 15,
    fontWeight: "500",
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
