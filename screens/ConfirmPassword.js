// Profile screen
import React, { Component } from 'react';
import { Text,Alert, Button, TextInput, View, StyleSheet } from 'react-native';

import { Auth } from 'aws-amplify';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class ConfirmPassword  extends React.Component {

      constructor(props) {
        super(props);
        
        this.state = {
            email: '',
            confirmationCode: '',
            password: '',
            errorMessage:'',
            showError:false,
        };
      }
      confirm() {
      
        Auth.forgotPasswordSubmit(this.state.email,this.state.confirmationCode,this.state.password)
        .then(user => {this.setState({user})
        this.props.navigation.navigate('TodoPage')})
     
        .catch(err => this.setState({errorMessage: "Incorrect statements!"}),this.setState({showError: true}))
      }
//Method used to login when we click on the login button using Auth component from AWS Amplify library
      
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
            <TextInput
              value={this.state.confirmationCode}
              onChangeText={(confirmationCode) => this.setState({ confirmationCode })}
              placeholder={'Confirmation Code'}
              
              style={styles.input}
            />
             <TextInput
              value={this.state.password}
              onChangeText={(password) => this.setState({ password })}
              placeholder={'New Password'}
              secureTextEntry={true}
              style={styles.input}
            />
           { this.state.showError && (<View><Text style={{color : 'red', alignItems: 'center'}}>{this.state.errorMessage}</Text></View>)}
           
               <TouchableOpacity
              
              style={styles.Buttons}
              onPress={()=>{this.confirm()}}
              color="black">
              <Text style={ {color : 'white', alignItems: 'center'}}>
                 {"Confirm"}
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