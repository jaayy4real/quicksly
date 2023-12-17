import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const SignUp = () => {
    const navigation =  useNavigation()
    const Confirmation = ()=>{
      navigation.navigate('Confirmation')
    }
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.main}>
      <Text style={styles.header}>Enter your number</Text>
      <Text style={styles.info}>We will send a code to your mobile</Text>
      <Text style={styles.info}>number</Text>

      <View style={styles.textinput}>
        <Image source={require('../assets/ngflag.png')} style={{marginLeft:'2%'}}/>
        {/* <Image source={require('../assets/arr.png')} style={{}}/> */}
        <Text style={{marginLeft:'5%', fontSize:25}}>+234</Text>
        <TextInput style={styles.input}
          placeholder='Phone Number'
        />
      </View>

      <TouchableOpacity style={{marginTop:'2%'}}>
        <Text style={{color:'#B118C8'}}>
          Log in with facebook
        </Text>
      </TouchableOpacity>

       <TouchableOpacity style={styles.button} onPress={Confirmation} >
        <Text style={{alignSelf:'center', color:'white'}}> CONTINUE</Text>
    </TouchableOpacity>
    </View>
      
    </SafeAreaView>
  )
};

export default SignUp

const styles = StyleSheet.create({
  container:{
    // flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    height:'100%',
    // width:'80%'
  },
  main:{
    height:'100%',
    marginLeft:'7%',
    marginRight:'7%',
    marginTop:'15%',
    display:'flex'
  },
  header:{
    fontSize:27,
    fontWeight:"500",
    marginBottom:5
  },
  info:{
    fontSize:17
  },
  textinput:{
    // padding:"20%",
    height:"8%",
     borderStyle:'solid',
    borderWidth:2,
    borderColor:'#B118C8',
    // justifyContent: 'center',
    alignItems: 'center', 
    flexDirection: 'row',
    marginTop:'5%'
  },
  input:{
     width: '80%',
    fontSize: 25,
    // paddingLeft: 7,
    marginLeft:'5%'

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