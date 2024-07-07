import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import axios from 'axios';

const NutritionTracking = () => {
  const [foodItem, setFoodItem] = useState('');
  const [nutritionInfo, setNutritionInfo] = useState(null);

  const fetchNutritionInfo = async () => {
    try {
      const response = await axios.get(`https://api.nutritionix.com/v1_1/search/${foodItem}`);
      setNutritionInfo(response.data);
    } catch (error) {
      console.error('Error fetching nutrition information: ', error);
    }
  };

  useEffect(() => {
    if (foodItem) {
      fetchNutritionInfo();
    }
  }, [foodItem]);

  return (
    <View>
      <Text>Enter a food item to get nutrition information:</Text>
      <TextInput
        placeholder="Enter food item"
        value={foodItem}
        onChangeText={text => setFoodItem(text)}
      />
      <Button title="Search" onPress={fetchNutritionInfo} />

      {nutritionInfo && (
        <View>
          <Text>Food Item: {nutritionInfo.item_name}</Text>
          <Text>Calories: {nutritionInfo.nf_calories}</Text>
          <Text>Protein: {nutritionInfo.nf_protein}</Text>
          <Text>Carbohydrates: {nutritionInfo.nf_total_carbohydrate}</Text>
          <Text>Fat: {nutritionInfo.nf_total_fat}</Text>
        </View>
      )}
    </View>
  );
};

export default NutritionTracking;