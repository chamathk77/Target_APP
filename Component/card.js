import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Colors from '../constant/colors'

function Card(props) {
 
    return (
        <View style={styles.card}>{props.children}</View>
    )
  }

export default Card


const styles=StyleSheet.create({
    card:{
        flex:0,
        padding:16,
        marginHorizontal:24 ,
        marginTop:36,
        backgroundColor:Colors.primary800,
        borderRadius:8,
        elevation:4,
        shadowColor:'black',
        shadowOffset:{width:0 ,height:2},
        shadowRadius:6,
        shadowOpacity:0.25,

        justifyContent :'center',
        alignItems:'center'

    }
})
