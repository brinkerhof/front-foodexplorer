import axios from "axios";

export const api = axios.create({
   baseURL: "http://localhost:3000",
  // baseURL: "https://api-food-explorer-nwu0.onrender.com/",
});
