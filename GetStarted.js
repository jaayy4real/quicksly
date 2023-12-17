import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const GetStarted = () => {
  const navigation= useNavigation()

    const Signup = ( )=>{
    navigation.navigate('SignUp')
  }
  return (
   <SafeAreaView style={styles.container}>
    <Text style={{fontSize:70, fontWeight:"600"}}>Quicksly</Text>
    <Text style={{fontWeight:'600'}}>Fastest Delivery Service</Text>
    <Text style={{fontWeight:'600'}}>in Africa</Text>


    <TouchableOpacity style={styles.button} onPress={Signup} >
        <Text style={{alignSelf:'center', color:'white'}}>Get Started</Text>
    </TouchableOpacity>
   </SafeAreaView>
  )
}

export default GetStarted

const styles = StyleSheet.create({
    container:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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