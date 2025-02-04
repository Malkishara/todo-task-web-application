const axios = require("axios");

const API_URL = "http://localhost:5000/api/tasks";

const TaskService = {
  getTasks: async () => {
    try {
      const response = await axios.get(`${API_URL}/pending`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  addTask: async (task) => {
    try {
      const response = await axios.post(API_URL, task);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  updateTaskStatus: async (id) => {
    try {
      const response = await axios.put(`${API_URL}/${id}/status`, { status: true });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

module.exports = TaskService; 
