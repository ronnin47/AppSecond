

import { View, Text, StyleSheet} from "react-native";




export const Ejercicios1_5=()=>{




    return(
        <View style={styles.container}>

            <Text style={styles.texto}>Ejercicios del 1 al 5</Text>

        </View>
    )
}





const styles=StyleSheet.create({

    container:{
        flex:1,
        alignItems:"center",
        backgroundColor:"#000",
    },
    texto:{
        color:"aliceblue",
    }
})



