import { Text, View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';

//useState
import { useState } from 'react';



//  COMPONENTE
export const Ejercicio7 = () => {

  //HOOKS
  const   [ cantAutosVendidos, setCantAutosVendidos]= useState("");
  const   [pantalla, setPantalla]=useState("");

  
const enunciado = `7) Una concesionaria de autos paga a los vendedores un sueldo fijo de $ 18500.-, más $ 1500.- de premio por cada auto vendido. Hacer un programa que permita ingresar por teclado la cantidad de autos vendidos por un determinado vendedor y que luego calcule el sueldo total a pagarle al mismo (sueldo fijo + comisión total) y emitirlo por pantalla. Atención: el programa solamente debe solicitar un solo dato: la cantidad de autos vendidos.`;

//FUNCION CALCULAR
const calcular=()=>{
  const sueldoBase=18500;
  const  bonoVentaAuto=1500;

  const resultado= (Number(cantAutosVendidos) * bonoVentaAuto)+ sueldoBase;
  const info=`Autos vendidos: ${cantAutosVendidos}   Comision: $ ${bonoVentaAuto * Number(cantAutosVendidos)} 
Sueldo basico:  $ ${sueldoBase}
Total Sueldo: $ ${resultado}`;
  setPantalla( info);
}



  
  return (
    <View style={styles.container}>
    <Text style={styles.enunciado}>{enunciado}</Text>


     <Text style={styles.pantalla}>{pantalla}</Text>


     <View style={{flexDirection:"row", gap:4, margin:10,}}>

    <TextInput
     style={styles.input}
     value={cantAutosVendidos}
     placeholder='Autos ventas'
     onChangeText={setCantAutosVendidos}
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
    fontSize:12,
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

