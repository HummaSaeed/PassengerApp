import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BackButton from './components/BackButton';
import BlackButton from './components/BlackButton'

const AddCard = ({navigation}) => {
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
        <Text style={styles.title}>Add Card</Text>
      </View>
      <View style={styles.inputfield}>
        <Text style={{ color: "grey" }}>Card Number</Text>
      </View>
      <View style={{display:'flex',flexDirection:'row',paddingHorizontal:30,paddingVertical:20}}>
          <View style={{width:80,alignItems:'center',justifyContent:'center'}}>
              <Text style={{fontSize:14}}>Empty</Text>
          </View>
          <View style={styles.inputfields}>
        <Text style={{ color: "grey",fontSize:12 }}>MM</Text>
      </View>
      <View style={styles.inputfields}>
        <Text style={{ color: "grey" }}>YY</Text>
      </View>

      </View>
      <View style={styles.inputfield}>
        <Text style={{ color: "grey" }}>Security Code</Text>
      </View>
      <View style={{marginTop:30,alignItems:'center'}}>
        <BlackButton text={"Next"} onPress={()=>{navigation.navigate('Startmap')}}/>

      </View>
    </View>
  );
};

export default AddCard;

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
  inputfields: {
    height: 45,
    width: 80,
    backgroundColor: "white",
    borderWidth: 0,
    borderRadius: 5,
    zIndex: 1000,
    marginTop: 0,
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
    marginLeft: 30,
  },
});
