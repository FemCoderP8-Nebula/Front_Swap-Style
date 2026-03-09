import api from "./api";

const apiContact = {
  send: async (data) => {
    const response = await api.post("/contact/send", data);
    return response.data;
  },
};

export default apiContact;