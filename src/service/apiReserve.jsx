import api from "./api";

const apiReserve = {
  toggle: async (articleId, userId) => {
    const response = await api.post("/reserves", { articleId, userId });
    return response.data;
  },

  getUserReservations: async (userId) => {
    const response = await api.get(`/reserves/user/${userId}`);
    return response.data;
  },
};

export default apiReserve;