// Profile screen
import React, { Component } from 'react';
import { Text,Alert, Button, TextInput, View, StyleSheet } from 'react-native';
import { Link } from "react-router-dom";
import { Auth } from 'aws-amplify';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class EmailSending  extends React.Component {

      constructor(props) {
        super(props);
        
        this.state = {
          email: '',
         
        };
      }
      
//Method used to login when we click on the login button using Auth component from AWS Amplify library
      sendEmail() {
      
        Auth.forgotPassword(this.state.email).then(user => {this.setState({user})
        this.props.navigation.navigate('ConfirmPassword')})
        .catch(err => console.log('error signing in',err))
      }
//What we see on the screen          
    render() {
        return (
          <View style={styles.container}>
            <TextInput
              value={this.state.email}
              onChangeText={(email) => this.setState({ email })}
              placeholder={'Email'}
              style={styles.input}
            />
          
            <TouchableOpacity
              
              style={styles.Buttons}
              onPress={()=>{this.sendEmail()}}
              color="black">
              <Text style={ {color : 'white', alignItems: 'center'}}>
                 {"Send Email"}
               </Text>
               </TouchableOpacity>
            
           
        </View>
        );
      }
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
      },
      input: {
        width: 200,
    
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
        backgroundColor: '#ecf0f1',
      },

      Buttons: {
        width: 200,
        height: 44,
        borderWidth: 1,
        borderColor: 'white',
        marginBottom: 10,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        flexDirection: 'row'
      
    
      }
    });