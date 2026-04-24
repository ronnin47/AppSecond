import { ScrollView,View, Text, StyleSheet} from "react-native";

import { Ejercicio6 } from "./ejercicios/Ejercicio6";
import { Ejercicio7 } from "./ejercicios/Ejercicio7";
import { Ejercicio8 } from "./ejercicios/Ejercicio8";
import { Ejercicio9 } from "./ejercicios/Ejercicio9";
import { Ejercicio10 } from "./ejercicios/Ejercicio10";




export const Ejercicios6_10=()=>{




    return(
        <View style={styles.container}>

             <ScrollView
                style={{ flex: 1,    width: "100%", }}
                contentContainerStyle={{
                gap: 22,
                padding: 12,
                }}
            >
                <Ejercicio6 />
                <Ejercicio7 />
                <Ejercicio8 />
                <Ejercicio9 />
                <Ejercicio10 />
             
            </ScrollView>

        </View>
    )
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f0f',
    alignItems: 'center',
    padding:12,
    //justifyContent: 'center',
  },
  titulo:{
    color: "#f7f5f4",
    backgroundColor: "#4e62bba9",
    fontSize: 22,
    marginTop:60,
    borderWidth: 1,
    borderColor: '#d1d3dda9',
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 10,
    marginBottom: 20,
    fontFamily:"bold",
  },
  texto:{
    color: 'white',
    fontSize: 20,
    margin:12,
  }
});

