import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://process-visualizer-backend.vercel.app",
  headers: {
    "Content-Type": "application/json",
  },
})

export default apiClient;
