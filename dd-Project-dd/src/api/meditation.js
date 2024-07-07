import axios from 'axios';

const BASE_URL = 'https://api.meditation.com';

const getMeditationById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/meditations/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error while fetching meditation:', error);
    return null;
  }
};

const searchMeditations = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/meditations/search`, {
      params: { query }
    });
    return response.data;
  } catch (error) {
    console.error('Error while searching meditations:', error);
    return null;
  }
};

export {
  getMeditationById,
  searchMeditations
};