import React, { Component, useState, useEffect } from 'react';

import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View } from 'react-native';

import axios from 'axios';

export default function App() {

    const [data, setData] = useState({ status: [] });
    
    useEffect(() => {


// a simple set timeout, to run once

        setTimeout(function callback(){

            console.log('This message will be logged after 300 milliseconds or 3 seconds');

        }, 3000);

// a simple set interval to run often

        setInterval(function run(){

            console.log('This will run indefinitely after every 1 second');

        }, 1000);

// a simple set interval to call a function
   const updateCountdown1 = () => { 
               console.log('this is the update countdown');
        }; 
  
        updateCountdown1(); 

        const interval1 = setInterval(updateCountdown1, 1000); 

///////////////////////////////////


 const updateCountdown = () => { 

        console.log("enter > updateCountdown");
        
        console.log("sending rest request");

        var request = new XMLHttpRequest();

        request.onreadystatechange = (e) => {

            if (request.readyState !== 4) {
            
                return;
            
            }

            if (request.status === 200) {
    
                console.log("the response came back good");

                console.log("response: " + request.responseText);

                console.log("load-state-before: ")
                console.log(data);

                setData(request.responseText);

                console.log("load-state-after: ")
                console.log(data);

            } else {
           
                console.warn('error');
                
            }
            
       };
       
    var restEndpoint = 'https://intention.softwareshinobi.digital/intention/';
    
    console.log("endpoint URL: ",restEndpoint );

    request.open('GET', restEndpoint);
    
    request.send();

    console.log("finished sending request");
         
//    }, []);
   }; 
  
        updateCountdown(); 

        const interval = setInterval(updateCountdown, 1000); 

    return (

        <View style={styles.container}>

            <Text style={styles.content}>

                   { data + "" }
                
            </Text>

            <StatusBar style="auto" />

        </View>
        
    );
  
}

const styles = StyleSheet.create({

    container: {

        flex: 1,     

        backgroundColor: 'pink',

        alignItems: 'center',

        justifyContent: 'center',

    },

    content: {
    
        //   fontSize: RFValue(124, 580), // arg #2 is standardScreenHeight(optional), 
    
        fontSize: 48,
    
     transform: [{ rotate: '90deg'}]//this needs to be removed
    
    },

});
