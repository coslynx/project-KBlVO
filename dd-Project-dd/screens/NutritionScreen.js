import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getNutritionData } from '../services/dataService';

const NutritionScreen = () => {
  const [nutritionData, setNutritionData] = useState(null);

  useEffect(() => {
    fetchNutritionData();
  }, []);

  const fetchNutritionData = async () => {
    try {
      const data = await getNutritionData();
      setNutritionData(data);
    } catch (error) {
      console.error('Error fetching nutrition data: ', error);
    }
  };

  return (
    <View style={styles.container}>
      {nutritionData ? (
        <View>
          <Text style={styles.title}>Nutrition Data</Text>
          <Text>{nutritionData.calories} Calories</Text>
          <Text>{nutritionData.protein}g Protein</Text>
          <Text>{nutritionData.carbs}g Carbs</Text>
          <Text>{nutritionData.fat}g Fat</Text>
        </View>
      ) : (
        <Text>Loading nutrition data...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default NutritionScreen;