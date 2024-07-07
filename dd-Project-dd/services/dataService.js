import axios from 'axios';

const BASE_URL = 'https://api.example.com';

const dataService = {
  getUserData: async (userId) => {
    try {
      const response = await axios.get(`${BASE_URL}/users/${userId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching user data:', error);
      return null;
    }
  },
  saveUserData: async (userId, userData) => {
    try {
      const response = await axios.put(`${BASE_URL}/users/${userId}`, userData);
      return response.data;
    } catch (error) {
      console.error('Error saving user data:', error);
      return null;
    }
  },
  getActivityData: async (userId, date) => {
    try {
      const response = await axios.get(`${BASE_URL}/activities/${userId}/${date}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching activity data:', error);
      return null;
    }
  },
  saveActivityData: async (userId, activityData) => {
    try {
      const response = await axios.put(`${BASE_URL}/activities/${userId}`, activityData);
      return response.data;
    } catch (error) {
      console.error('Error saving activity data:', error);
      return null;
    }
  },
  getGoalData: async (userId) => {
    try {
      const response = await axios.get(`${BASE_URL}/goals/${userId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching goal data:', error);
      return null;
    }
  },
  saveGoalData: async (userId, goalData) => {
    try {
      const response = await axios.put(`${BASE_URL}/goals/${userId}`, goalData);
      return response.data;
    } catch (error) {
      console.error('Error saving goal data:', error);
      return null;
    }
  },
  getProgressData: async (userId) => {
    try {
      const response = await axios.get(`${BASE_URL}/progress/${userId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching progress data:', error);
      return null;
    }
  },
  saveProgressData: async (userId, progressData) => {
    try {
      const response = await axios.put(`${BASE_URL}/progress/${userId}`, progressData);
      return response.data;
    } catch (error) {
      console.error('Error saving progress data:', error);
      return null;
    }
  },
  getRecommendations: async (userId) => {
    try {
      const response = await axios.get(`${BASE_URL}/recommendations/${userId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching recommendations:', error);
      return null;
    }
  },
};

export default dataService;