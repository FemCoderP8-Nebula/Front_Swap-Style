import api from "./api";

const articleService = {
  create: async (idUser, data) => {
    const response = await api.post(`/article/add/${idUser}`, data);
    return response.data;
  },

  getAll: async () => {
    const response = await api.get("/article/articles");
    return response.data;
  },

  getByCategory: async (category) => {
    const response = await api.get(`/article/articlesByCategory?category=${category}`);
    return response.data;
  },

  getByPublishedRange: async (range) => {
    const response = await api.get(`/article/articlesByPublishedRange?range=${range}`);
    return response.data;
  },

  getGallery: async (page = 0, size = 30) => {
    const response = await api.get(`/article/gallery?page=${page}&size=${size}`);
    return response.data;
  },

  getCategories: async () => {
    const response = await api.get("/article/categories");
    return response.data;
  },
};

export default articleService;