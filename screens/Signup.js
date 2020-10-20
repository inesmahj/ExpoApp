// Profile screen
import React, { Component } from 'react';
import { Alert, Button, TextInput, View, StyleSheet } from 'react-native';
import { Auth } from 'aws-amplify';
export default class Signup  extends React.Component {
//initialising state values in constructor
      constructor(props) {
        super(props);
        
        this.state = {
          username: '',
          password: '',
          email: '',
          PhoneNumber: '',
        };
      }
 //signup with modified state values using Auth component from AWS Amplify library 
      signup() {
      
        Auth.signUp
        ({username:this.state.username,
          password:this.state.password,
          attributes: {
          email:this.state.email,
          phone_number:this.state.PhoneNumber
        }}).then()
        .then(this.props.navigation.navigate('ConfirmSignup'))
        
        .catch(err => console.log('error signing up',err))
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
             <TextInput
              value={this.state.email}
              onChangeText={(email) => this.setState({ email })}
              placeholder={'email'}
              
              style={styles.input}
            />
             <TextInput
              value={this.state.PhoneNumber}
              onChangeText={(PhoneNumber) => this.setState({ PhoneNumber })}
              placeholder={'PhoneNumber'}
            
              style={styles.input}
            />
            
           
            <Button
              title={'Signup'}
              style={styles.input}
              onPress={()=>{this.signup()}}
              color="black"
            />
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
    });