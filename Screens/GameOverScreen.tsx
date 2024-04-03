import React, { Component } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Title from '../Component/Title'
import Colors from '../constant/colors'
import PrimaryButton from '../Component/PrimaryButton'

function GameOverScreen(props){
  
    return (
      <View style={styles.rootContainer}>
        <Title>Game Over</Title>
        <View style={styles.imageContainer}>
            <Image style={styles.image} source={require('../assets/images/success.png')}/>

        </View>
        <Text style={styles.summaryText}>
            Your phone need <Text style={styles.highlight}>{props.roundNumber}</Text> rounds to guess the number<Text style={styles.highlight}> {props.usersNumber}</Text>
        </Text>
        <PrimaryButton onPress={props.onStartNewGame}>start new Game</PrimaryButton>
      </View>
    )
  }


export default GameOverScreen

const styles=StyleSheet.create({
    imageContainer:{
        width:300,
        height:300,
        borderRadius:150,
        borderWidth:3,
        borderColor:Colors.primary800,
        overflow:'hidden',
        margin:36

    },
    image:{
        width:'100%',
        height:'100%'
    },
    rootContainer:{
        flex:1,
        padding:24,
        justifyContent:'center',
        alignItems:'center'
    },
    summaryText:{
        fontFamily:'open-sans',
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center',
        marginVertical:24
    },
    highlight:{
        fontFamily:'open-sans-bold',
        color:Colors.primary500
    }
})
