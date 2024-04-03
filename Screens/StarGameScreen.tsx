import React, { Component, useState } from 'react'
import { Alert, Dimensions, StyleSheet, Text, TextInput, View, useWindowDimensions,KeyboardAvoidingView,ScrollView } from 'react-native'
import PrimaryButton from '../Component/PrimaryButton'
import Colors from '../constant/colors'
import Title from '../Component/Title'
import Card from '../Component/card'
import InstructionText from '../Component/InstructionText'


function  StarGameScreen (props)  {

  const {width,height}=useWindowDimensions()

  const [enteredNumber,setEnteredNumber]=useState('')

  function numberInputHandler(enteredText: React.SetStateAction<string>){
    setEnteredNumber(enteredText)
     }

  function resetInputHandler(){
    setEnteredNumber('')
  }   

  function confirmInputHandler(){
    const chosenNumber =parseInt(enteredNumber)

    if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber >99){
      Alert.alert(
        'Invalid number!',
        'Number has to be number between 1 and 99',
        [{text:'Okey',style:'destructive',onPress:resetInputHandler}]
      )
      return
    }else{
      props.onPickNumber(chosenNumber)


    }
    

  }
  const marginTopDistance =height<400?30:100
 
    return (
      <ScrollView style={{flex:1}}>

        <KeyboardAvoidingView style={{flex:1}} behavior='position'>

        <View style={[styles.rootContainer,{marginTop:marginTopDistance}]}>
          <Title>Guess My Number</Title>

          <Card >

          <InstructionText >Enter Number</InstructionText>
          <TextInput
          style={styles.numberInput} 
          maxLength={2} 
          keyboardType='number-pad' 
          autoCapitalize='none'
          autoCorrect={false}
          value={enteredNumber}
          onChangeText={numberInputHandler}

          />
          
            
          

          <View style={styles.buttonsContainer}>

            <View style={styles.buttonContainer}>
              <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
            </View>
            <View style={styles.buttonContainer}>
              <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
            </View>
            
            
          </View>
            
        </Card> 

        </View>
        </KeyboardAvoidingView>
      </ScrollView>

      
      
      
    )

  
}

export default StarGameScreen

// const deviceHeight =Dimensions.get('window').height

const styles=StyleSheet.create({

    rootContainer:{
      flex:1,
      // marginTop:deviceHeight <480 ? 30 :100,
      alignItems:'center'

    },
    
    

    numberInput:{
      height:50,
      width:50,
      textAlign:'center',
      fontSize:22,
      borderBottomColor:Colors.accent500,
      borderBottomWidth:2,
      color:Colors.accent500,
      marginVertical:8,
      fontWeight:'bold'



    },
    buttonsContainer:{
      flexDirection:'row',
    },

    buttonContainer:{
      flex:1
    }

})