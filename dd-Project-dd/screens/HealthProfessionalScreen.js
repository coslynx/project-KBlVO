import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const HealthProfessionalScreen = () => {
  const [advice, setAdvice] = useState('');

  useEffect(() => {
    fetchAdvice();
  }, []);

  const fetchAdvice = async () => {
    try {
      const response = await axios.get('https://api.healthprofessionals.com/advice');
      setAdvice(response.data);
    } catch (error) {
      console.error('Error fetching advice: ', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Health Professional Advice</Text>
      <Text style={styles.advice}>{advice}</Text>
      <Button title="Get New Advice" onPress={fetchAdvice} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  advice: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default HealthProfessionalScreen;