
import { Text, View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import { useEffect, useState } from 'react';



//  COMPONENTE
export const Ejercicio11 = () => {

  //HOOKS
  const   [ distancia, setDistancia]= useState("");
  const   [ velocidad, setVelocidad]= useState("");
  const   [ pantalla, setPantalla]=useState("");


  
const enunciado = "11) Hacer un programa para solicitar por teclado: la distancia en kilómetros entre dos ciudades y la velocidad promedio en km./h a la que un auto puede recorrer el tramo. el programa debe calcular el tiempo en horas que se tardará en recorrer esa distancia. por ejemplo: distancia 400, velocidad 100, resultado: 4 horas.";

//FUNCION CALCULAR
const calcular = () => {
  const horas = Number(distancia) / Number(velocidad);
  const info=`Distancia: ${distancia} Km
Velocidad: ${velocidad} km/h
Tiempo de viaje: ${horas} horas
  `;
  setPantalla(info);
  setDistancia("");
  setVelocidad("");
};



  
  return (
    <View style={styles.container}>
    <Text style={styles.enunciado}>{enunciado}</Text>


     <Text style={styles.pantalla}>{pantalla}</Text>


     <View style={{flexDirection:"row", gap:4, margin:10,}}>

    <TextInput
     style={styles.input}
     value={distancia}
     placeholder='Distancia Km'
     onChangeText={setDistancia}
     keyboardType="numeric"
     
    ></TextInput>

      <TextInput
     style={styles.input}
     value={velocidad}
     placeholder='Vel. Km/h'
     onChangeText={setVelocidad}
     keyboardType="numeric"
    ></TextInput>

     </View>


    <TouchableOpacity 

    style={styles.botonCalcular}

    onPress={()=>{calcular()}}
    
    >

      <Text style={styles.textoCalcular}>Calcular</Text>
    
    </TouchableOpacity>

    </View>
  )}




 // STYLES 
const styles = StyleSheet.create({
container: {
  justifyContent: 'center',
  alignItems:'center',
  padding:20,
   backgroundColor:"#a8bdbab6",
  borderWidth:1,
  borderColor:"#e6dfdf",
  borderRadius:10,
  gap:10,
},
  texto:{
    color: 'white',
    fontSize: 20,
    textAlign:"center"
  },
   textoCalcular:{
    color: 'white',
    fontSize: 12,
    textAlign:"center"
  },
  enunciado:{
    color: 'white',
    fontSize: 14,
  },
  input:{
    width:120,
    height:40,
    borderWidth:1,
    borderColor:"#f3e9e9",
    backgroundColor:"#eee6e6c2",
    borderRadius:4,
    padding:10,
    color:"#000",
    fontSize:14,
    textAlign:"center"
  },
  pantalla:{
    width:260,
    height:80,
    backgroundColor:"#131212ab",
    color:"greenyellow",
    borderWidth:1,
    borderColor:"aliceblue",
    fontSize:14,
    fontFamily:"bold",
    borderRadius:4,
    padding:12,
  },
  botonCalcular:{
    backgroundColor:"#3742a7ec",
    width:100,
    height:40,
    borderWidth:1,
    borderColor:"aliceblue",
    fontSize:10,
    fontFamily:"bold",
    borderRadius:10,
    alignItems:"center",
    justifyContent:"center",
    elevation:12,
  }

})
