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
    try {
      const response = await api.get(`/article/articlesByCategory?category=${category}`);
      return response.data;
    } catch (error) {
      return [];
    }
  },

  getByPublishedRange: async (range) => {
    try {
      const response = await api.get(`/article/articlesByPublishedRange?range=${range}`);
      return response.data;
    } catch (error) {
      return [];
    }
  },

  getGallery: async (page = 0, size = 30) => {
    const response = await api.get(
      `/article/gallery?page=${page}&size=${size}`,
    );
    return response.data;
  },

  getCategories: async () => {
    const response = await api.get("/article/categories");
    return response.data;
  },

  getByUser: async (idUser) => {
    const response = await api.get(`/article/user/${idUser}`);
    return response.data;
  },

  updateTitle: async (id, title) => {
    const response = await api.patch(`/article/title/${id}`, { title });
    return response.data;
  },

  updateDescription: async (id, description) => {
    const response = await api.patch(`/article/description/${id}`, { description });
    return response.data;
  },

  updatePrice: async (id, price) => {
    const response = await api.patch(`/article/price/${id}`, { price });
    return response.data;
  },

  updateSize: async (id, size) => {
    const response = await api.patch(`/article/size/${id}`, { size });
    return response.data;
  },

  updateCategory: async (id, category) => {
    const response = await api.patch(`/article/category/${id}`, { category });
    return response.data;
  },

  updateState: async (id, state) => {
    const response = await api.patch(`/article/state/${id}`, { state });
    return response.data;
  }
};

export default articleService;
