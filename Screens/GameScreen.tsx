import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Title from '../Component/Title'


 function GameScreen() {
  
    return (
      <View style={styles.screen}>
        <Title>Opponent's Guess</Title>
        
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