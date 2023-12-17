import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import OTPInput, { ResendOTP } from "otp-input-react";
import  { useState } from 'react';
import OTPTextView from 'react-native-otp-textinput';
import { useNavigation } from '@react-navigation/native';

const Confirmation = () => {
    const navigation = useNavigation()
    const mapScreen = ()=>{
        navigation.navigate('mapScreen')
    }
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.main}>
        <Text style={{fontSize:27,
        fontWeight:"500"
        
        }}>Enter Code</Text>
        <Text
        style={{
            fontSize:17,
            color:'gray',
            marginTop:'1%'
        }}
        >An SMS code was sent to you</Text>
        <Text style={{
            fontSize:17,
            fontWeight:"500",
            marginTop:"1%"
        }}>+234 8071527301</Text>
        <Text style={{
            fontSize:16,
            color:'#B118C8'
        }}>Edit phone number</Text>
    <View style={{marginTop:'5%'}} >
          <OTPTextView 
       autoFocus
        inputCount={4}
        tintColor='#B118C8'
        
       />
    </View>

    <View >
        <Text>Resend code in 16</Text>
    </View>

    <TouchableOpacity style={styles.button} onPress={mapScreen} >
        <Text style={{alignSelf:'center', color:'white'}}> CONTINUE</Text>
    </TouchableOpacity>
     
    </View>
      
    </SafeAreaView>
  )
}

export default Confirmation

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        height:"100%"
    },
    main:{
        height:'100%',
        marginLeft:'7%',
        marginRight:'7%',
        marginTop:'15%',
        display:'flex',
        
    },
    button:{
        backgroundColor:'#441151',
        minWidth:'80%',
        height:'7%',
        justifyContent: 'center',
        borderRadius:'25px',
        marginTop:'15%'
        
    }
})