import React, { Children, Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Colors from '../constant/colors'

function Title(props){
  
    return (
      <View>
       <Text style={styles.title}> {props.children} </Text>
      </View>
    )
  }

export default Title

const styles=StyleSheet.create({
    title:{
        fontSize:25,
        fontWeight:'bold',
        color:'white',
        textAlign:'center',
        borderColor:Colors.accent500,
        borderWidth:2,
        padding:11
    }
})
