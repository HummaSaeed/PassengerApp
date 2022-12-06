import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import car from '../assets/car.png'
import { TouchableOpacity } from 'react-native-gesture-handler';
import CustomIcon from 'react-native-vector-icons/AntDesign'

const Car = ({navigation}) => {
  return (
    <SafeAreaView
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      width: "100%",
      backgroundColor: "white",
      height: "100%",
    }}
  >
      <Text style={{fontSize:26,fontWeight:'700',textAlign:'center'}}>Let's go you moving</Text>
   <View style={{marginTop:20}}>
    <Image source={car}/>
   
    </View>
    <TouchableOpacity style={{display:'flex',flexDirection:'row',alignItems:'center',marginTop:20}}>
        <Text style={{fontWeight:'500',fontSize:18,marginLeft:190,marginRight:2}} onPress={()=>{navigation.navigate('Map')}}>
            Start 
        </Text>
        <CustomIcon name="arrowright" size={18}/>
    </TouchableOpacity>
   
    </SafeAreaView>
  )
}

export default Car

const styles = StyleSheet.create({})