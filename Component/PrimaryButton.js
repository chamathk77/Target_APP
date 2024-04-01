import { Pressable, Text, View ,StyleSheet} from "react-native"

function PrimaryButton(props){

    function confirmInputHandler(){
        props.onPress()
    }

    

    return(
        <View style={styles.buttonOuterContainer}>
            <Pressable 
                style={({pressed})=>
                    pressed 
                        ?[styles.buttonInnerContainer,styles.pressed]
                        :  styles.buttonInnerContainer
                } 
                onPress={confirmInputHandler} 
                android_ripple={{color:'#640223'}}>
                    
                <Text style={styles.buttonText}>{props.children}</Text>
            
            </Pressable>
        </View>


    )

}

export default PrimaryButton

const styles =StyleSheet.create({

    buttonOuterContainer:{
        borderRadius:28,
        margin:4,
        overflow:'hidden'

    },
    buttonInnerContainer:{
        backgroundColor:'#72063c',
        paddingVertical:8,
        paddingHorizontal:16,
        elevation:2
        
    },
    container:{
        backgroundColor:'#72063c',
        borderRadius:28,
        paddingVertical:8,
        paddingHorizontal:16,
        elevation:2,
        margin:4
    },
    buttonText:{
        color:'white',
        textAlign:'center'

    },
    pressed:{
    opacity:0.75,


    }
})