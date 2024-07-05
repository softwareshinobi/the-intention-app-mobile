import React, { useState, useEffect } from 'react';

import { StyleSheet, Text, View } from 'react-native';

const MyComponent = () => {

    const [data, setData] = useState(null);

    const [error, setError] = useState(null);

    useEffect(() => {

        const fetchData = async () => {

        console.log("inside fetchData");

            try {

                console.log("calling await fetch");

                const response = await fetch("http://apis.intention.softwareshinobi.digital:8888", {
                    method: "GET",
                    headers: {
                        Accept: 'text/plain',
                        'Content-Type': 'text/plain'
                    },
                });

                if (!response.ok) {

                    console.log("was response error");

                    throw new Error(`HTTP error! status: ${response.status}`);

                }else{console.log("here");}

console.log("yo11``");

                const fetchedData = await response.text();

console.log("yo1113");

                setData(fetchedData);

console.log("y22");

            } catch (err) {
console.log("error: " );

console.log(err);

                setError(err.message);

            }

        };


 const interval = setInterval(() => {
   

       fetchData();

    }, 8888);


//        fetchData();

    }, []);

    return (

        <View style={styles.container}>

            {error ? (

                <Text> error: / {error}</Text>

            ) : (

                data ? (

                    <Text style={styles.content}>{data}</Text>

                ) : (

                    <Text >Loading...</Text>

                )

            )}

        </View>

    );

};


export default MyComponent;

const styles = StyleSheet.create({

    container: {

        flex: 1,     

        backgroundColor: 'pink',

        alignItems: 'center',

        justifyContent: 'center',

    },

    content: {

        //   fontSize: RFValue(124, 580), // arg #2 is standardScreenHeight(optional), 

        fontSize: 50,

        transform: [{ rotate: '90deg'}]

    },

});
               