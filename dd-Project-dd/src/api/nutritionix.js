import axios from 'axios';

const BASE_URL = 'https://api.nutritionix.com/v1_1/';

const apiKey = 'YOUR_API_KEY';

const searchFoodItem = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}search/${query}?results=0:20&fields=item_name,brand_name,item_id,nf_calories&appId=${apiKey}`);
    return response.data;
  } catch (error) {
    console.error('Error searching for food item:', error);
    return null;
  }
};

const getNutritionDetails = async (itemId) => {
  try {
    const response = await axios.get(`${BASE_URL}item?id=${itemId}&appId=${apiKey}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching nutrition details:', error);
    return null;
  }
};

export { searchFoodItem, getNutritionDetails };