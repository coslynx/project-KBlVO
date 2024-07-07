import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import axios from 'axios';

const HealthProfessionalConnection = () => {
  const [healthProfessionals, setHealthProfessionals] = useState([]);

  useEffect(() => {
    fetchHealthProfessionals();
  }, []);

  const fetchHealthProfessionals = async () => {
    try {
      const response = await axios.get('https://api.example.com/healthProfessionals');
      setHealthProfessionals(response.data);
    } catch (error) {
      console.error('Error fetching health professionals: ', error);
    }
  };

  return (
    <View>
      <Text>Health Professionals:</Text>
      {healthProfessionals.map((professional) => (
        <View key={professional.id}>
          <Text>Name: {professional.name}</Text>
          <Text>Specialty: {professional.specialty}</Text>
          <Text>Location: {professional.location}</Text>
          <Button title="Connect" onPress={() => connectWithProfessional(professional.id)} />
        </View>
      ))}
    </View>
  );
};

const connectWithProfessional = (professionalId) => {
  // Logic to connect with the selected health professional
};

export default HealthProfessionalConnection;