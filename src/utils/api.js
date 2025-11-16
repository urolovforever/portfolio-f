import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://nizomjon.pythonanywhere.com/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Profile API
export const profileAPI = {
  get: async () => {
    try {
      const response = await api.get('/profile/');
      return response.data;
    } catch (error) {
      console.error('Error fetching profile:', error);
      throw error;
    }
  },
};

// Projects API
export const projectsAPI = {
  getAll: async () => {
    try {
      const response = await api.get('/projects/');
      return response.data.results || response.data;
    } catch (error) {
      console.error('Error fetching projects:', error);
      throw error;
    }
  },

  getById: async (id) => {
    try {
      const response = await api.get(`/projects/${id}/`);
      return response.data;
    } catch (error) {
      console.error('Error fetching project:', error);
      throw error;
    }
  },

  create: async (projectData) => {
    try {
      const response = await api.post('/projects/', projectData);
      return response.data;
    } catch (error) {
      console.error('Error creating project:', error);
      throw error;
    }
  },

  update: async (id, projectData) => {
    try {
      const response = await api.put(`/projects/${id}/`, projectData);
      return response.data;
    } catch (error) {
      console.error('Error updating project:', error);
      throw error;
    }
  },

  delete: async (id) => {
    try {
      await api.delete(`/projects/${id}/`);
    } catch (error) {
      console.error('Error deleting project:', error);
      throw error;
    }
  },
};

export default api;
