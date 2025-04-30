import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001';

const api = {
  getAllFoods: () => axios.get(`${API_BASE_URL}/foods`),
  getFoodById: (id) => axios.get(`${API_BASE_URL}/foods/${id}`)
};

export default api;