import axios from 'axios';

const BASE_URL = 'https://www.googleapis.com/fitness/v1';

const getFitnessData = async (userId, startDate, endDate) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${userId}/dataSources`, {
      params: {
        'start-date': startDate,
        'end-date': endDate,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching fitness data: ', error);
    return null;
  }
};

const saveFitnessData = async (userId, data) => {
  try {
    const response = await axios.post(`${BASE_URL}/users/${userId}/dataSets`, data);
    return response.data;
  } catch (error) {
    console.error('Error saving fitness data: ', error);
    return null;
  }
};

export { getFitnessData, saveFitnessData };