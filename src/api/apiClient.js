import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://process-visualizer-backend.vercel.app",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // Include credentials with requests
});

apiClient.interceptors.response.use(
  response => response,
  error => {
    if (error.response) {
      console.error("Response error:", error.response.data);
      console.error("Status:", error.response.status);
      console.error("Headers:", error.response.headers);
    } else if (error.request) {
      console.error("Request error:", error.request);
    } else {
      console.error("Axios error:", error.message);
    }
    return Promise.reject(error);
  }
);

export default apiClient;
