import React from 'react';
import {Platform, StyleSheet, Text, View } from 'react-native';
//Header is the first created component, it returns a view element that contains another text element in which we can inject a title 
//for our app thanks to the propertie that we can customize . 


    const Header =(props)=>{
        return (
            <View style={styles.header}>
            <Text style={styles.title}> {props.title}</Text>
            </View>

        )
    }

    const styles=StyleSheet.create({
      header: {
         backgroundColor: '#171717',
         height:60,
         alignItems: 'center',
         justifyContent: 'center'

      },
      title: {   
        color: '#F3F3F3',
         fontSize: 28,
         fontWeight: '900',
         textTransform: 'uppercase'
      } 
    });

    export default Header;