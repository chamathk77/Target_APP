import React, { Component, useEffect, useState } from 'react'
import { Alert, FlatList, StyleSheet, Text, View } from 'react-native'
import Title from '../Component/Title'
import NumberContainer from '../Component/game/NumberContainer'
import PrimaryButton from '../Component/PrimaryButton'
import Card from '../Component/card'
import InstructionText from '../Component/InstructionText'
import GuessLogItem from '../Component/game/GuessLogItem'



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
    const [guessRounds,setGuessRounds]=useState([initialGuess])

    useEffect(()=>{
      if(currentGuess === props.userNumber){
        props.onGameOver(guessRounds.length)
      }

    },[currentGuess,props.userNumber])

    useEffect(()=>{
      minBoundary=1
      maxBoundary=100

    },[])



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
        setGuessRounds(prevGuessRound =>[newRndNumber,...prevGuessRound,])
      }

      const guessRoundsListLength = guessRounds.length

    return (
      <View style={styles.screen}>
        <Title>Opponent's Guess</Title>
        <NumberContainer>{currentGuess}</NumberContainer>

        
        {/* GUESS */}
        <Card>
            <InstructionText style={styles.instructionText} >Higher or lower</InstructionText>

            <View style={styles.buttonsContainer}>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={nextGuessHandler.bind(this,'lower')}>
                  -
                </PrimaryButton>

              </View>

              <View style={styles.buttonContainer}>

                <PrimaryButton onPress={nextGuessHandler.bind(this,'greater')}>
                  +
                </PrimaryButton>


              </View>
              
            </View>
            



            
            {/* +
            - */}

        </Card>
        <View style={styles.lisContainer}>
          {/* {guessRounds.map((guessRounds,index)=> <Text key={guessRounds}>{guessRounds}</Text>)} */}
            {/* Log Round */}

           <FlatList data={guessRounds} 
            renderItem={(itemdata)=><GuessLogItem  roundNumber={guessRoundsListLength-itemdata.index} guess={itemdata.item} /> }
            keyExtractor={(item)=>item}
           /> 

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
    buttonsContainer:{
      flexDirection:'row',
    },

    buttonContainer:{
      flex:1
    },
    instructionText:{
      marginBottom:12

    },
    lisContainer:{
      flex:1,
      padding:16
    }

    
})
