import React, { useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, View,TextInput, TouchableOpacity } from 'react-native'
import {auth} from '../firebase'
import { useNavigation } from '@react-navigation/core'

const Login = () => {
    const navigation = useNavigation()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleSignUp = () => {
        auth
          .createUserWithEmailAndPassword(email, password)
          .then(userCredentials => {
            const user = userCredentials.user;
            console.log('Registered with:', user.email);
          })
          .catch(error => alert(error.message))
      }
      
  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Logged in with:', user.email);
      })
      .catch(error => alert(error.message))
  }

    return (
       <KeyboardAvoidingView
       style={styles.container}
       behavior="padding"
       >
           <View style={styles.inputContainer}>
               <TextInput
               placeholder='Email'
               style={styles.input}
               value={email}
               onChangeText={text => setEmail(text)}
               />
               <TextInput
               placeholder='Password'
               style={styles.input}
               value={password}
               onChangeText={text => setPassword(text)}
               secureTextEntry
               />

              
           </View>
           <View style={styles.buttonContainer}>
               <TouchableOpacity 
               onPress={handleLogin}
               style={styles.button}>
<Text style={styles.buttonText}>Login</Text>
               </TouchableOpacity>

               <TouchableOpacity 
               onPress={handleSignUp}
               style={styles.buttonOutline}>
<Text style={styles.button ,styles.buttonOutlineText}>Register</Text>
               </TouchableOpacity> 


           </View>
       </KeyboardAvoidingView>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    inputContainer: {
      width: '80%'
    },
    input: {
      backgroundColor: 'white',
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 10,
      marginTop: 5,
    },
    buttonContainer: {
      width: '60%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 40,
    },
    button: {
      backgroundColor: '#0782F9',
      width: '100%',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
    },
    buttonOutline: {
      backgroundColor: 'white',
      marginTop: 5,
      borderColor: '#0782F9',
      borderWidth: 2,
      width: '100%',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
    },
    buttonText: {
      color: 'white',
      fontWeight: '700',
      fontSize: 16,
    },
    buttonOutlineText: {
      color: '#0782F9',
      fontWeight: '700',
      fontSize: 16,
    },
  })
