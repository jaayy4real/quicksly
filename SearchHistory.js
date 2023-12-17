import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
const SearchHistory = () => {
  return (
    <TouchableOpacity style={{flexDirection:'row', marginTop:'5%'}}>
       <Feather name="clock" size={23} color="#ABABAB" />
       <Text style={{ fontSize: 22, color:'#000000', paddingLeft:7 }}>Mother and Child Hospital</Text>
     </TouchableOpacity>
  )
}

export default SearchHistory

const styles = StyleSheet.create({})