import React, { Children, Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

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
        color:'#ddb52f',
        textAlign:'center',
        borderColor:'#ddb52f',
        borderWidth:2,
        padding:11
    }
})
