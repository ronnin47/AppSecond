
import { Text, View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import { useEffect, useState } from 'react';



//  COMPONENTE
export const Ejercicio12 = () => {

  //HOOKS
  const   [ cantPiezasPorHora, setCantPiezasPorHora]= useState("");
  const   [ piezasTotales, setPiezasTotales]= useState("");
  const   [ pantalla, setPantalla]=useState("");


  
const enunciado = "12) Hacer un programa que solicite por teclado la cantidad de piezas que fabrica una máquina por hora y la cantidad de piezas totales que hay que fabricar, luego determinar e informar el total de horas que la máquina demorará en completar la producción total.";

//FUNCION CALCULAR
const calcular = () => {
  const horas = Number(piezasTotales) / Number(cantPiezasPorHora);
  const info=`Piezas por Hr: ${cantPiezasPorHora} 
Cantidad de piezas a fabricar: ${piezasTotales}
Total de hrs de produccion: ${horas}
  `;
  setPantalla(info);
  setCantPiezasPorHora("");
  setPiezasTotales("");
};



  
  return (
    <View style={styles.container}>
    <Text style={styles.enunciado}>{enunciado}</Text>


     <Text style={styles.pantalla}>{pantalla}</Text>


     <View style={{flexDirection:"row", gap:4, margin:10,}}>

    <TextInput
     style={styles.input}
     value={cantPiezasPorHora}
     placeholder='Cant. Piezas Hr'
     onChangeText={setCantPiezasPorHora}
     keyboardType="numeric"
     
    ></TextInput>

      <TextInput
     style={styles.input}
     value={piezasTotales}
     placeholder='Total a fabricar'
     onChangeText={setPiezasTotales}
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
