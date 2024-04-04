import React, { Children, Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
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
        fontSize:20,
        fontWeight:'bold',
        color:'white',
        textAlign:'center',
        borderColor:'white',
        // borderWidth:Platform.OS==='android'?2:0,
        borderWidth:Platform.select({ios:0,android:2}),
        padding:11,
        maxWidth:'80%'

    }
})
