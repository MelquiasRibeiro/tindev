import React from 'react';
import {
View, StyleSheet,
Image, TextInput,
TouchableOpacity,Text
} from 'react-native';

import Logo from '../assets/logo.png'


export default function Login(){
    return(
        <>
        <View  style={styles.container}>
            <Image source={Logo}/>
            <TextInput 
            placeholder="digite seu usuário do github"
            style={styles.input}
            placeholderTextColor="#999"
            autoCapitalize='none'
            autoCorrect={false}/>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>    
                    Entrar
                </Text>
            </TouchableOpacity>
        </View>
        </>
    );
};

const styles= StyleSheet.create({
container: {
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#123',
    flex:1
},
input:{
    height:46,
    width:300,
    backgroundColor:'#fff',
    borderWidth:1,
    borderColor:'#ddd',
    borderRadius:4,
    marginTop:20,
    paddingHorizontal: 15,
},
button:{
    height:46,
    backgroundColor:'#df4723',
    width:300,
    borderRadius:4,
    marginTop:10,
    justifyContent:'center',
    alignItems: 'center',



},
text:{
    color:'#fff',
    fontWeight:'bold',
    fontSize:16,


},

});
