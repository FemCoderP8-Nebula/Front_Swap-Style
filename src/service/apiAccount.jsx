import api from "./api";

const handleError = (error) => {
  if (error.response) {
    return error.response.data.message || "Server error";
  } else if (error.request) {
    return "Server not responding";
  } else {
    return error.message;
  }
};

const userService = {

  register: async (data) => {
    try {
      const response = await api.post("/users/register", data);
      return response.data;
    } catch (error) {
      throw new Error(handleError(error));
    }
  },

  login: async (data) => {
    try {
      const response = await api.post("/users/login", data);
      return response.data;
    } catch (error) {
      throw new Error(handleError(error));
    }
  },

  getProfile: async (id) => {
    try {
      const response = await api.get(`/users/profile/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(handleError(error));
    }
  },

  updateUserName: async (id, data) => {
    try {
      const response = await api.patch(`/users/name/${id}`, data);
      return response.data;
    } catch (error) {
      throw new Error(handleError(error));
    }
  },

  updateUserAvatar: async (id, data) => {
    try {
      const response = await api.patch(`/users/avatar/${id}`, data);
      return response.data;
    } catch (error) {
      throw new Error(handleError(error));
    }
  },

  deleteUser: async (id) => {
    try {
      await api.delete(`/users/${id}`);
    } catch (error) {
      throw new Error(handleError(error));
    }
  }

};

export default userService;