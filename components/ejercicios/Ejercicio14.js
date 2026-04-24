
import { Text, View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import { useEffect, useState } from 'react';



//  COMPONENTE
export const Ejercicio14 = () => {

  //HOOKS
  const   [ asientosDisponibles, setAsientosDisponibles]= useState("");
  const   [ pasajesVendidos, setPasajesVendidos]= useState("");
  const   [ pantalla, setPantalla]=useState("");


  
const enunciado = "14) Hacer un programa para ingresar por teclado la cantidad de asientos disponibles en un avión y la cantidad de pasajes vendidos (es decir la cantidad de asientos ocupados) y luego calcular e informar el porcentaje de ocupación del mismo. por ejemplo: si el avión tiene 200 asientos disponibles y se vendieron 80 pasajes, el porcentaje de ocupación que se informará será de un 40%. nota: los valores 200 y 80 son solamente para ejemplificar, no debe hacer un programa para ingresar solamente esos valores, debe ser genérico.";

//FUNCION CALCULAR
const calcular = () => {
  const porcentajeOcupacion = (pasajesVendidos*100)/Number(asientosDisponibles);
  const info=`Total de asientos: ${asientosDisponibles}
Pasajes vendidos: ${pasajesVendidos} 
Porcentaje de ocupacion: ${porcentajeOcupacion}%
  `;
  setPantalla(info);
  setAsientosDisponibles("");
  setPasajesVendidos("");
};



  
  return (
    <View style={styles.container}>
    <Text style={styles.enunciado}>{enunciado}</Text>


     <Text style={styles.pantalla}>{pantalla}</Text>


     <View style={{flexDirection:"row", gap:4, margin:10,}}>

    <TextInput
     style={styles.input}
     value={asientosDisponibles}
     placeholder='Disponibles'
     onChangeText={setAsientosDisponibles}
     keyboardType="numeric"
     
    ></TextInput>

      <TextInput
     style={styles.input}
     value={pasajesVendidos}
     placeholder='Pas. vendidos'
     onChangeText={setPasajesVendidos}
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
