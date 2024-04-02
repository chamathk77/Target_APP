import React, { Component, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Title from '../Component/Title'
import NumberContainer from '../Component/game/NumberContainer'


 function generateRandomBetween(min: number,max: number,exclude: any){
    const rndNum = Math.floor(Math.random()* (max-min))+min

    if(rndNum == exclude){
      return generateRandomBetween(min,max,exclude);
    }else{
      return rndNum
    }

 }


 function GameScreen(props) {
    const initialGuess =generateRandomBetween(1,100,props.userNumber)
    const [currentGuess,setCurrentGuess]= useState(initialGuess)

    return (
      <View style={styles.screen}>
        <Title>Opponent's Guess</Title>
        <NumberContainer>{currentGuess}</NumberContainer>

        
        {/* GUESS */}
        <View>
            <Text>Higher or lower</Text>

            

            
            {/* +
            - */}

        </View>
        <View>
            {/* Log Round */}
        </View>
      </View>
    )
  }


export default GameScreen

const styles=StyleSheet.create({
    screen:{
        flex:1,
        padding:24
    },
    
})
