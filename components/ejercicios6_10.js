
import { View, Text, StyleSheet} from "react-native";




export const Ejercicios6_10=()=>{




    return(
        <View style={styles.container}>

            <Text style={styles.texto}>Ejercicios del 6 al 10</Text>

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