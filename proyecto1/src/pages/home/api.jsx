import axios from "axios";

const API_URL = "https://api.example.com"; // Reemplaza con la URL de tu API

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getData = async () => {
  try {
    const response = await api.get("/endpoint"); // Reemplaza '/endpoint' con el endpoint de tu API
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const postData = async (data) => {
  try {
    const response = await api.post("/endpoint", data); // Reemplaza '/endpoint' con el endpoint de tu API
    return response.data;
  } catch (error) {
    console.error("Error posting data:", error);
    throw error;
  }
};

// Agrega más funciones según sea necesario
