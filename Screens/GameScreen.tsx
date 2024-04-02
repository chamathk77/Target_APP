import React, { Component, useEffect, useState } from 'react'
import { Alert, StyleSheet, Text, View } from 'react-native'
import Title from '../Component/Title'
import NumberContainer from '../Component/game/NumberContainer'
import PrimaryButton from '../Component/PrimaryButton'

 function generateRandomBetween(min: number,max: number,exclude: any){
    const rndNum = Math.floor(Math.random()* (max-min))+min

    if(rndNum == exclude){
      return generateRandomBetween(min,max,exclude);
    }else{
      return rndNum
    }

 }

 let minBoundary=1
 let maxBoundary=100;


 function GameScreen(props) {
    const initialGuess =generateRandomBetween(1,100,props.userNumber)
    const [currentGuess,setCurrentGuess]= useState(initialGuess)
    
    useEffect(()=>{
      if(currentGuess === props.userNumber){
        props.onGameOver()
      }

    },[currentGuess,props.userNumber])

    function nextGuessHandler(direction: string){// direction=> 'lower' , 'greater'

        if((direction==='lower' && currentGuess<props.userNumber) || 
          (direction === 'greater' && currentGuess>props.userNumber)
          ){
            Alert.alert("do not lie ",'you know that this is wrong',
            [{text:'Sorry',style:'cancel'}])
            return
          

        }
        if(direction === 'lower'){
          maxBoundary=currentGuess;
          generateRandomBetween(minBoundary,maxBoundary,currentGuess)

        }else{
          minBoundary=currentGuess+1
          
        }

        const newRndNumber=generateRandomBetween(minBoundary,maxBoundary,currentGuess)
        setCurrentGuess(newRndNumber)
      }



    return (
      <View style={styles.screen}>
        <Title>Opponent's Guess</Title>
        <NumberContainer>{currentGuess}</NumberContainer>

        
        {/* GUESS */}
        <View>
            <Text>Higher or lower</Text>

            <View>
              <PrimaryButton onPress={nextGuessHandler.bind(this,'lower')}>-</PrimaryButton>
              <PrimaryButton onPress={nextGuessHandler.bind(this,'greater')}>+</PrimaryButton>
              
            </View>
            



            
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
