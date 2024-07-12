import axios from "axios";

const API_URL = "https://api.themoviedb.org/3";
const API_KEY = "472b425481163a17f782694e83a78ed3";
const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NzJiNDI1NDgxMTYzYTE3Zjc4MjY5NGU4M2E3OGVkMyIsIm5iZiI6MTcyMDc3Mjk3MS4wOTI1MTIsInN1YiI6IjY2OTBlODRlNjM0Mjc4YTA4ZDhiMzU2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1S2-t5Sh3IZi2_0zq6lHwvSrELOi4cK8vTwXUxiF8J4";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
});

export const getPopularMovies = async () => {
  try {
    const response = await api.get(`/movie/popular?api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

// Agrega más funciones según sea necesario
