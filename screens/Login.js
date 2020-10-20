// Profile screen
import React, { Component } from 'react';
import { Text,Alert, Button, TextInput, View, StyleSheet } from 'react-native';
import { Link } from "react-router-dom";
import { Auth } from 'aws-amplify';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Login  extends React.Component {

      constructor(props) {
        super(props);
        
        this.state = {
          username: '',
          password: '',
          errorMessage: '',
          showError: false,
        };
      }
      
//Method used to login when we click on the login button using Auth component from AWS Amplify library
      onLogin() {
      if ((this.state.username=='') || (this.state.password==''))
      {
        this.setState({errorMessage: "Empty field error!"});
        this.setState({showError: true});
      }
       else { 
          Auth.signIn(this.state.username,this.state.password).then(user => {this.setState({user})
        this.props.navigation.navigate('TodoPage')})
        .catch(err => this.setState({errorMessage: "Email and password don't match"}),this.setState({showError: true}))
       }
      
      }
//What we see on the screen          
    render() {
        return (
          <View style={styles.container}>
            <TextInput
              value={this.state.username}
              onChangeText={(username) => this.setState({ username })}
              placeholder={'Username'}
              style={styles.input}
            />
            <TextInput
              value={this.state.password}
              onChangeText={(password) => this.setState({ password })}
              placeholder={'Password'}
              secureTextEntry={true}
              style={styles.input}
            />


               
               { this.state.showError && (<View><Text style={{color : 'red', alignItems: 'center'}}>{this.state.errorMessage}</Text></View>)}

             <Text
              
             onPress={()=>{this.props.navigation.navigate('EmailSending')}}>Forgot password?</Text>
           

            <TouchableOpacity
              
              style={styles.Buttons}
              onPress={()=>{this.onLogin()}}
              color="black">
              <Text style={ {color : 'white', alignItems: 'center'}}>
                 {"LOGIN"}
               </Text>
               </TouchableOpacity>
               <TouchableOpacity
              
              style={styles.Buttons}
              onPress={()=>{this.props.navigation.navigate('Signup')}}
              color="black">
              <Text style={ {color : 'white', alignItems: 'center'}}>
                 {"SIGNUP"}
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