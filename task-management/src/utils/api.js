
import axios from 'axios';

const API_URL = 'https://api.example.com'; // Replace with your API base URL

export const fetchTasks = async () => {
  try {
    const response = await axios.get(`${API_URL}/tasks`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching tasks');
  }
};

export const createTask = async (task) => {
  try {
    const response = await axios.post(`${API_URL}/tasks`, task);
    return response.data;
  } catch (error) {
    throw new Error('Error creating task');
  }
};

export const updateTask = async (taskId, updatedData) => {
  try {
    const response = await axios.put(`${API_URL}/tasks/${taskId}`, updatedData);
    return response.data;
  } catch (error) {
    throw new Error('Error updating task');
  }
};

export const deleteTask = async (taskId) => {
  try {
    await axios.delete(`${API_URL}/tasks/${taskId}`);
  } catch (error) {
    throw new Error('Error deleting task');
  }
};
