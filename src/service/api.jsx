import axios from "axios";
import { navigateTo } from "../router/navigator";

const api = axios.create({
  baseURL: "http://localhost:8080/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      console.error(
        "Error in the response:",
        error.response.status,
        error.response.data,
      );
      switch (error.response.status) {
        case 400:
          alert("Bad Request (400)");
          break;
        case 401:
          alert("Not authorized (401)");
          localStorage.removeItem("token");
          navigateTo("/home/login");
          break;
        case 404:
          alert("Resource not Found (404)");
          break;
        case 500:
          // no hacer nada, cada servicio maneja el error con try/catch
          break;
        default:
          alert(`Error: ${error.response.status}`);
      }
    } else if (error.request) {
      console.error("No response was received from the server", error.request);
      alert("Could not connect to the server.");
    } else {
      console.error("Error al configurar la solicitud:", error.message);
      alert("Error sending the request.");
    }

    return Promise.reject(error);
  },
);

export default api;
