import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react';
import BackButton from './components/BackButton';
import BlackButton from './components/BlackButton';
import CustomIcon from 'react-native-vector-icons/AntDesign'

const ImportCard = ({navigation}) => {
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
    <View
        style={{
          marginTop: 20,
          height: 110,
          width: 300,
          marginLeft: 30,
          marginRight: 30,
          backgroundColor: "#f0f0f5",
          display:'flex',        
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
        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
        <Text style={{ color: "black",fontWeight:'500' }}>Debit card added successfully</Text>
      <CustomIcon name="check" color="#F164b2" size={18}/>
      </View> 
      <View style={{display:'flex',flexDirection:'row', marginTop:10,alignItems:'center',justifyContent:'space-between'}}>
        <Text style={{fontSize:12,marginRight:10}}>Visa</Text>
        <Text style={{fontSize:5,marginRight:15}}>110200095</Text>
        <Text style={{fontSize:5,marginRight:15,fontSize:10}}>110200095</Text>
        <View style={{borderColor:'#F164b2',paddingHorizontal:10,paddingVertical:5,borderWidth:1,borderRadius:10,alignItems:'center',justifyContent:'center'}}>
        <Text style={{fontSize:10,color:'#F164b2'}}>Delete Card</Text>
        </View>
      </View>
      </View>
      <View style={{alignItems:'center',marginTop:20}}>
      <BlackButton text={"Next"} onPress={()=>{navigation.navigate('Location')}}/>
      </View>
    </View>
  )
}

export default ImportCard

const styles = StyleSheet.create({
    title: {
        fontSize: 26,
        fontWeight: "700",
        margin: 10,
        color: "black",
        marginLeft: 10,
      },
})