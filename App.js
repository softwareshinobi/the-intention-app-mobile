import React, { Component, useState, useEffect } from 'react';

import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View } from 'react-native';

import axios from 'axios';

export default function App() {

 //   const API_END_POINT = 'http://localhost:8888/';

    const API_END_POINT = 'https://apis.intention.softwareshinobi.digital/intention/';

    const [data, setData] = useState({ data: [] });

    const fetchIntentionFromAPI = () => { 

        console.log("enter >  / getIntention");

        var request = new XMLHttpRequest();

        request.onreadystatechange = (e) => {

            if (request.readyState !== 4) {
            
                console.log("error / " + request.responseText);

                setData(request.responseText);

                setData("<server error>\ntry again, mr anderson");

                return;
            
            }

            if (request.status === 200) {
    
                console.log("request / code 200 / ok");

                console.log("response: " + request.responseText);

                console.log("state / data / before / ", data);

                setData(request.responseText);

                console.log("state / data /  after / ", data);

                console.log(data);

            } else {                
            }
            
       };
    
    console.log("GET / " + API_END_POINT);

    request.open('GET', API_END_POINT);
    
    request.send();

    }; 
    
    const intervalFetchIntentionFromAPI = setInterval(fetchIntentionFromAPI, 1000 *  8);

    useEffect(() => {
         
    }, []);

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

        backgroundColor: 'hotpink',

        alignItems: 'center',

        justifyContent: 'center',

    },

    content: {
     
        fontSize: 48,
    
     transform: [{ rotate: '90deg'}]
    
    },

});
