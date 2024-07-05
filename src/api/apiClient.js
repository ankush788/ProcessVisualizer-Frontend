import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://process-visualizer-backend-3he2knjt3-ankush788s-projects.vercel.app",
  headers: {
    "Content-Type": "application/json",
  },
})

export default apiClient;
