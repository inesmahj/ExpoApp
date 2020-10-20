// Profile screen
import React, { Component } from 'react';
import { Alert, Button, TextInput, View, StyleSheet } from 'react-native';
import { Auth } from 'aws-amplify';

export default class ConfirmSignup  extends React.Component {
//initialising state values in constructor
      constructor(props) {
        super(props);
        
        this.state = {
          code: '',
          username: '',
          
        };
      }
      
//confirm with modified state values using Auth component from AWS Amplify library 
      confirmSignup() {
      
        Auth.confirmSignUp(this.state.username,this.state.code)
        .then(user => {this.setState({user})
        this.props.navigation.navigate('TodoPage')})
     
        .catch(err => console.log('error signing in',err))
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
              value={this.state.code}
              onChangeText={(code) => this.setState({ code })}
              placeholder={'Confirmation Code'}
              
              style={styles.input}
            />
            
            <Button
              title={'Confirm signUp'}
              style={styles.input}
              onPress={()=>{this.confirmSignup()}}
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