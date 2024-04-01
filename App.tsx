import React, { useState } from 'react';
import {ImageBackground, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import StarGameScreen from './Screens/StarGameScreen';
import LinearGradient from 'react-native-linear-gradient';
import GameScreen from './Screens/GameScreen';
function App() {
  // eslint-disable-next-line no-lone-blocks
  const [userNumber,setUserNumber]=useState();

  function pickedNumberHandler(pickedNumber:any){
    setUserNumber(pickedNumber)
    console.log(pickedNumber)
   
    

  }

  let screen = <StarGameScreen onPickNumber={pickedNumberHandler} />

  if(userNumber){
    screen =<GameScreen/>
  }




  
    return (

      <LinearGradient colors={['#4e0329','#ddb52f']} style={styles.rootScreen}>
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