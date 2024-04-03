import React, { useState } from 'react';
import {ImageBackground, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import StarGameScreen from './Screens/StarGameScreen';
import LinearGradient from 'react-native-linear-gradient';
import GameScreen from './Screens/GameScreen';
import Colors from './constant/colors';
import GameOverScreen from './Screens/GameOverScreen';
function App() {
  // eslint-disable-next-line no-lone-blocks
  const [userNumber,setUserNumber]=useState();
  const [gameIsOver,setGameIsOver]=useState(false)
  const [guessRounds,setGuessRounds]=useState(0)

  function pickedNumberHandler(pickedNumber:any){
    setUserNumber(pickedNumber)
    console.log(pickedNumber)
    setGameIsOver(false)

  }
  function gameOverHandler(numberOfRound){
    setGameIsOver(true)
    setGuessRounds(numberOfRound)

  }
  function startNewGameHandler(){
    setUserNumber(null)
    setGuessRounds(0)
    

  }


  let screen = <StarGameScreen onPickNumber={pickedNumberHandler} />

  if(userNumber){
    screen =<GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
  }

  if(gameIsOver && userNumber){
    screen= <GameOverScreen usersNumber={userNumber} roundNumber={guessRounds} 
    onStartNewGame={startNewGameHandler}/>
  }

 



  
    return (

      <LinearGradient colors={[Colors.primary700,Colors.accent500]} style={styles.rootScreen}>
        <ImageBackground 
          source={require('./assets/images/background.png')}
          resizeMode='cover'
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage}
          >
            <SafeAreaView style={styles.rootScreen}>
            {screen}
            </SafeAreaView>
            
          
        </ImageBackground>
       
      </LinearGradient>
      
      
      
    );
  }

export default App;

const styles = StyleSheet.create({
  rootScreen:{
    flex:1,
    
  },
  backgroundImage:{
    opacity:0.15

  }
 
  
})
