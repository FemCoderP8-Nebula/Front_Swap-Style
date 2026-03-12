import api from "./api";

// const articleService = {
//   create: async (idUser, data) => {
//     const response = await api.post(`/article/add/${idUser}`, data);{
      
//     }
//     return response.data;
//   },

const articleService = {
  create: async (idUser, data) => {
    // 'data' es el FormData. Axios necesita que sea el segundo argumento.
    const response = await api.post(`/article/add/${idUser}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
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
  getById: async (id) => {
    const response = await api.get(`/article/${id}`);
    return response.data;
},
};

export default articleService;
