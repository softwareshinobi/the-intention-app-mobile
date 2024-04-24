import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
const MyComponent = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://192.168.1.4:8888/');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const fetchedData = await response.text();
        setData(fetchedData);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, []);

  return (
    <View >
      {error ? (
        <Text> error: / {error}</Text>
      ) : (
        data ? (
          <Text >Fetched data: {data}</Text>
        ) : (
          <Text >Loading...</Text>
        )
      )}
    </View>
  );
};

export default MyComponent;
