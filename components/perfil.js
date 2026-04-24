
import {ImageBackground,Text, View, StyleSheet} from "react-native";

const fondoHome="https://res.cloudinary.com/dzul1hatw/image/upload/v1775771291/af44fff87cc52df9db1bb26a243620ef_lpnyip.jpg";


export const Perfil=()=>{




return(

    
         <ImageBackground
          source={{ uri: fondoHome }}
          style={{ flex: 1 }}
          resizeMode="cover"
        >
         <View style={styles.container}>
    
       <Text style={styles.titulo}>PANTALLA DE PERFIL</Text>
    </View>
        </ImageBackground>
    
)
}





const styles=StyleSheet.create({

    container:{
        flex:1,
       // justifyContent:"center",
        alignItems:"centar",
       backgroundColor:"#0000007c",
         padding:12,
    },
    titulo:{
        fontFamily:"bold",
        fontSize:14,
        color:"aliceblue"
    },

})