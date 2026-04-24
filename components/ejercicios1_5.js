import { ScrollView,View, Text, StyleSheet} from "react-native";

import { Ejercicio1 } from "./ejercicios/Ejercicio1";
import { Ejercicio2 } from "./ejercicios/Ejercicio2";
import { Ejercicio3 } from "./ejercicios/Ejercicio3";
import { Ejercicio4 } from "./ejercicios/Ejercicio4";
import { Ejercicio5 } from "./ejercicios/Ejercicio5";




export const Ejercicios1_5=()=>{




    return(
        <View style={styles.container}>

             <ScrollView
                style={{ flex: 1,    width: "100%", }}
                contentContainerStyle={{
                gap: 22,
                padding: 12,
                }}
            >
                <Ejercicio1 />
                <Ejercicio2 />
                <Ejercicio3 />
                <Ejercicio4 />
                <Ejercicio5 />
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






