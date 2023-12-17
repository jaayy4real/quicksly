import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Tile = () => {
  return (
    <View style={styles.tile}>
        <Ionicons name="home-outline" size={24} color="black" />
        <Text style={{fontSize:20, paddingLeft:'5%'}}>Enter home location</Text>
    </View>
  )
}

export default Tile

const styles = StyleSheet.create({
     tile:{
        flexDirection:'row',
        alignItems:'center',
        paddingTop:'2%',
        borderBottomColor:'#000000',
        borderStyle:'solid',
        borderWidth:'1px',
        minHeight:'6%',
        borderColor:'#fff'
     }
})