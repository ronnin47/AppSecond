import { Text, View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';

//useState
import { useEffect, useState } from 'react';



//  COMPONENTE
export const Ejercicio9 = () => {

  //HOOKS

  const   [ importeTotal, setImporteTotal]= useState("");
  const   [pantalla, setPantalla]=useState("");

  
const enunciado = "9) Una casa de venta de electrodomésticos paga a sus vendedores un sueldo fijo de $ 7000.-, más una comisión de 5% sobre el importe total facturado en el mes. hacer un programa que permita ingresar por teclado el importe total facturado por un determinado vendedor y que luego calcule el sueldo total a pagarle al mismo (sueldo fijo + comisión total) y emitirlo por pantalla. atención: el programa solamente debe solicitar un solo dato: el importe total facturado.";

//FUNCION CALCULAR
const calcular=()=>{

  const sueldoBase=7000;

  const resultado= (Number(importeTotal) * 1.05)+sueldoBase;
  const info=`Sueldo base: $ ${sueldoBase}
Importe Total: $ ${importeTotal} 
Comision del 0.5%: $ ${Number(importeTotal) * 0.05}
Sueldo Total: $ ${resultado}
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
