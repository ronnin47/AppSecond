import { Text, View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';

//useState
import { useEffect, useState } from 'react';



//  COMPONENTE
export const Ejercicio15 = () => {

  //HOOKS

  const   [ importeTotal, setImporteTotal]= useState("");
  const   [pantalla, setPantalla]=useState("");

  
const enunciado = "15) Una biblioteca realiza las compras mensuales de nuevos materiales de acuerdo a los siguientes porcentajes: libros de interés general 50%, libros de tecnología 30%, libros de ciencias sociales 20%. hacer un programa para ingresar el importe total (en pesos) que la biblioteca destinará a la compra mensual y luego calcular e informar el importe que invertirá en cada tipo de libro.";

//FUNCION CALCULAR
const calcular=()=>{

  const librosGral=Number(importeTotal) * 0.5;
  const librosTec=Number(importeTotal)  *0.3;
  const librosSociales=Number(importeTotal)  * 0.2;

 
  const info=`Importe total: $ ${importeTotal}
libros de interés general 50%: $ ${librosGral} 
libros de tecnología 30%: $ ${librosTec}
libros de ciencias sociales 20%: $ ${librosSociales}
`

  setPantalla(info);
  setImporteTotal("");
}



  
  return (
    <View style={styles.container}>
    <Text style={styles.enunciado}>{enunciado}</Text>


     <Text style={styles.pantalla}>{pantalla}</Text>


     <View style={{flexDirection:"row", gap:4, margin:10,}}>

    <TextInput
     style={styles.input}
     value={importeTotal}
     placeholder='Importe total'
     onChangeText={setImporteTotal}
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
    height:100,
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
