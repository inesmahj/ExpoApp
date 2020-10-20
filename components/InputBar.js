import React from 'react';
import {StyleSheet, Text, View,TextInput, TouchableOpacity } from 'react-native';
//Input bar is the element created to enter the new task that we want to insert in our Todo List.
//It returns a view containing a text input element and a touchable opacity element, also decorated thanks to the imported react native component stylesheet.


const InputBar=(props) => {
  return (
    <View style={styles.inputContainer}>
       <TextInput 
       style={styles.input} 
       value={props.todoInput} 
       onChangeText={(todoInput) => props.textChange(todoInput)}
       />
       <TouchableOpacity style={styles.addButton} onPress={props.addNewTodo}>
         <Text style={styles.addButtonText}>ADD</Text>
       </TouchableOpacity>
    </View>
  )

}

const styles = StyleSheet.create({
 inputContainer: {
     flexDirection: 'row',
     justifyContent: 'space-between',
     shadowOffset: {width: 0, height: 5},
     shadowColor: '#171717',
     shadowOpacity: .1
 },
 input: {
     backgroundColor: '#F3F3F3',
     flex: 1,
     fontSize: 18,
     height: 40
 },
 addButton: {
     width: 100,
     backgroundColor: '#FFCE00',
     alignItems: 'center',
     justifyContent: 'center'
 }


})

export default InputBar;