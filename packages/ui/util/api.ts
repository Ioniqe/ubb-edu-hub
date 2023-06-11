import axios from "axios";

const api = axios.create({
  //baseURL: "https://edudive-be.vercel.app",
  baseURL: "http://localhost:5008/",
});

export default api;
