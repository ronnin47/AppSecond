import { ScrollView,View, Text, StyleSheet} from "react-native";

import { Ejercicio16 } from "./ejercicios/Ejercicio16";
import { Ejercicio17 } from "./ejercicios/Ejercicio17";
import { Ejercicio18 } from "./ejercicios/Ejercicio18";





export const Ejercicios16_20=()=>{




    return(
        <View style={styles.container}>

             <ScrollView
                style={{ flex: 1,    width: "100%", }}
                contentContainerStyle={{
                gap: 22,
                padding: 12,
                }}
            >
                <Ejercicio16 />
                <Ejercicio17 />
                <Ejercicio18 />
                
                
             
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

