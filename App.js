import React from 'react';
import {Dimensions,StyleSheet,Text,View} from 'react-native';
import Header from './components/Header';
import Home from './navigation/Home';
import { withAuthenticator } from 'aws-amplify-react-native'
import Amplify , {Auth} from 'aws-amplify'
import config from './aws-exports'
Amplify.configure(config)
// App.js

export default function App() {
  return (
    <View style={styles.outer}>
      <Home/>
    </View>
  );
}


const styles = StyleSheet.create({
outer:{
  flex:1,
},
container: {
  
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
},
});