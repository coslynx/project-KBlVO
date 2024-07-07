import axios from 'axios';

const BASE_URL = 'https://api.example.com';

const authService = {
  async registerUser(userData) {
    try {
      const response = await axios.post(`${BASE_URL}/register`, userData);
      return response.data;
    } catch (error) {
      throw new Error('Error registering user');
    }
  },

  async loginUser(credentials) {
    try {
      const response = await axios.post(`${BASE_URL}/login`, credentials);
      return response.data;
    } catch (error) {
      throw new Error('Error logging in');
    }
  },

  async logoutUser() {
    try {
      const response = await axios.post(`${BASE_URL}/logout`);
      return response.data;
    } catch (error) {
      throw new Error('Error logging out');
    }
  },

  async getUserProfile(userId) {
    try {
      const response = await axios.get(`${BASE_URL}/user/${userId}`);
      return response.data;
    } catch (error) {
      throw new Error('Error fetching user profile');
    }
  },

  async updateUserProfile(userId, updatedData) {
    try {
      const response = await axios.put(`${BASE_URL}/user/${userId}`, updatedData);
      return response.data;
    } catch (error) {
      throw new Error('Error updating user profile');
    }
  },

  async deleteUserProfile(userId) {
    try {
      const response = await axios.delete(`${BASE_URL}/user/${userId}`);
      return response.data;
    } catch (error) {
      throw new Error('Error deleting user profile');
    }
  }
};

export default authService;