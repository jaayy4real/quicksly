import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';


const FullPage = () => {
  return (
    <SafeAreaView style={{height:'100%', backgroundColor:'#fff',
     flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    }}>
    <View style={{marginLeft:'2%'}}>
        <View style={styles.head}>
     <AntDesign name="arrowleft" size={24} color="black" style={{}}/>
    <Text style={{fontSize:25, fontWeight:'600', paddingLeft:'9%'}}>Enter Destination</Text>
    </View>
    <View style={styles.body}>
        <View style={{flexDirection:'row', }}>
     <Image source={require('../assets/Ellipse5.png')} style={{alignSelf:'center', }}/>
    <TextInput style={{backgroundColor: '#CAC8C8', width:'80%', minHeight:'5%',marginLeft:'2%', paddingLeft:7, fontSize:22}}/>
   </View>
   
   <View style={{flexDirection:'row', paddingTop:'2%'}}>
      <Image source={require('../assets/Vector.png')} style={{alignSelf:'center'}}/>
    <TextInput style={{backgroundColor: '#CAC8C8' , width:'80%', minHeight:'5%', marginLeft:'3%', paddingLeft:7, fontSize:22}}/>
    <Ionicons name="add-sharp" size={40} color="black" />
   </View>
    </View>
    <TouchableOpacity>
        <View style={styles.tile}>
        <Ionicons name="home-outline" size={24} color="black" />
        <Text style={{fontSize:22, paddingLeft:'5%'}}>Enter home location</Text>
    </View>
    </TouchableOpacity>
    <TouchableOpacity>
         <View style={styles.tile}>
        <Ionicons name="md-briefcase-outline" size={24} color="black" />
        <Text style={{fontSize:22, paddingLeft:'5%'}}>Enter work location</Text>
    </View>
    </TouchableOpacity>
    <TouchableOpacity>
        <View style={styles.tile}>
       <Ionicons name="location-outline" size={24} color="black" />
        <Text style={{fontSize:22, paddingLeft:'5%'}}>Mother and Child Hospital</Text>
    </View>
    </TouchableOpacity>
     <TouchableOpacity>
        <View style={styles.tile}>
        <Ionicons name="location-outline" size={24} color="black" />
        <Text style={{fontSize:22, paddingLeft:'5%'}}>Lekki Phase 1</Text>
        {/* <Text style={{alignSelf:'flex-start', flexDirection:'row'}}>Lekki, Nigeria</Text> */}
    </View>
     </TouchableOpacity>

     <TouchableOpacity style={{flexDirection:'row', alignItems:'center', marginTop:'2%'}}>
        <Text style={{color:'#B118C8', }}>Choose on map</Text> 
        <Ionicons name="pin-sharp" size={17} color="black" />
     </TouchableOpacity>
     
    </View>
    
   
  
      
    </SafeAreaView>
  )
}

export default FullPage

const styles = StyleSheet.create({
    head:{
        flexDirection: 'row',
    },
    body: {
        marginTop:'4%',
        borderBottomColor:'#000000',
        borderStyle:'solid',
        borderWidth:'1px',
        minHeight:'14%',
        borderColor:'#fff'
    },
    tile:{
        flexDirection:'row',
        alignItems:'center',
        paddingTop:'2%',
        borderBottomColor:'#000000',
        borderStyle:'solid',
        borderWidth:'1px',
        minHeight:'10%',
        borderColor:'#fff'
    }
})