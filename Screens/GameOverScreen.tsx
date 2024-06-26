import React, { Component } from 'react'
import { Dimensions, Image, StyleSheet, Text, View ,useWindowDimensions,_ScrollView, ScrollView} from 'react-native'
import Title from '../Component/Title'
import Colors from '../constant/colors'
import PrimaryButton from '../Component/PrimaryButton'

function GameOverScreen(props){

    const {width,height}=useWindowDimensions()

    let imageSize=300
    
    if(width<380){
        imageSize=150

    }
    if (height<400){
        imageSize=80
    }

    const imageStyle={
        width:imageSize,
        height:imageSize,
        borderRadius:imageSize/2

    }
  
    return (
      <ScrollView style={{flex:1}}>
        <View style={styles.rootContainer}>
        <Title>Game Over</Title>
        <View style={[styles.imageContainer,imageStyle]}>
            <Image style={styles.image} source={require('../assets/images/success.png')}/>

        </View>
        <Text style={styles.summaryText}>
            Your phone need <Text style={styles.highlight}>{props.roundNumber}</Text> rounds to guess the number<Text style={styles.highlight}> {props.usersNumber}</Text>
        </Text>
        <PrimaryButton onPress={props.onStartNewGame}>start new Game</PrimaryButton>
      </View>
      </ScrollView>
    )
  }


export default GameOverScreen

// const deviceHeight =Dimensions.get('window').height


// const deviceWidth = Dimensions.get('window').width

const styles=StyleSheet.create({
    imageContainer:{
        // width:deviceWidth<380? 150 :300,
        // height:deviceWidth<380? 150 :300,
        // borderRadius:deviceWidth<380? 75 :150,
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
