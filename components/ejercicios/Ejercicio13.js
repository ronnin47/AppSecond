
import { Text, View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import { useEffect, useState } from 'react';



//  COMPONENTE
export const Ejercicio13 = () => {

  //HOOKS
  const   [ horaIngreso, setHoraIngreso]= useState("");
  const   [ minutoIngreso, setMinutoIngreso]= useState("");
  const   [ horaEgreso, setHoraEgreso]= useState("");
  const   [ minutoEgreso, setMinutoEgreso]= useState("");
  const   [ pantalla, setPantalla]=useState("");


  
const enunciado = "13) Hacer un programa para ingresar por teclado el horario de ingreso y egreso de un empleado a una empresa y luego indicar por pantalla la cantidad de minutos que trabajó. por ejemplo, si la hora de ingreso es 7:55 y la hora de egreso es 18:00, se informará 605 minutos. nota: para ingresar las 7:55 el programa los solicitará como dos datos por separado.";

//FUNCION CALCULAR
const calcular = () => {
  const ingreso = Number(horaIngreso) * 60 + Number(minutoIngreso);
  const egreso = Number(horaEgreso) * 60 + Number(minutoEgreso);

  const minutosTrabajados = egreso - ingreso;

  const info = `Horario de ingreso: ${horaIngreso}:${minutoIngreso}
Horario de egreso: ${horaEgreso}:${minutoEgreso}
Total trabajado en minutos: ${minutosTrabajados}
`;

  setPantalla(info);

  setHoraIngreso("");
  setMinutoIngreso("");
  setHoraEgreso("");
  setMinutoEgreso("");
};



  
  return (
    <View style={styles.container}>
    <Text style={styles.enunciado}>{enunciado}</Text>


     <Text style={styles.pantalla}>{pantalla}</Text>


     <View style={{flexDirection:"row", gap:4, margin:10,}}>

    <TextInput
     style={styles.input}
     value={horaIngreso}
     placeholder='hr ingreso'
     onChangeText={setHoraIngreso}
     keyboardType="numeric"
     
    ></TextInput>

      <TextInput
     style={styles.input}
     value={minutoIngreso}
     placeholder='Min ingreso'
     onChangeText={setMinutoIngreso}
     keyboardType="numeric"
    ></TextInput>

     </View>
     <View style={{flexDirection:"row", gap:4, margin:10,}}>

    <TextInput
     style={styles.input}
     value={horaEgreso}
     placeholder='hr Egreso'
     onChangeText={setHoraEgreso}
     keyboardType="numeric"
     
    ></TextInput>

      <TextInput
     style={styles.input}
     value={minutoEgreso}
     placeholder='Min Egreso'
     onChangeText={setMinutoEgreso}
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
