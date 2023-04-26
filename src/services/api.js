import axios from "axios";

export const api = axios.create({
  // baseURL: "http://localhost:3000" se estiver rodando localmente
  baseURL: "https://api-food-explorer-nwu0.onrender.com/",
});
