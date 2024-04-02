import React, { Component, useState } from 'react'
import { Alert, StyleSheet, Text, TextInput, View } from 'react-native'
import PrimaryButton from '../Component/PrimaryButton'
import Colors from '../constant/colors'

function  StarGameScreen (props)  {

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
 
    return (
      <View style={styles.inputContainer}>
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
          
      </View> 
    )

  
}

export default StarGameScreen

const styles=StyleSheet.create({
    inputContainer:{
        flex:0,
        padding:16,
        marginHorizontal:24 ,
        marginTop:100,
        backgroundColor:Colors.primary800,
        borderRadius:8,
        elevation:4,
        shadowColor:'black',
        shadowOffset:{width:0 ,height:2},
        shadowRadius:6,
        shadowOpacity:0.25,

        justifyContent :'center',
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