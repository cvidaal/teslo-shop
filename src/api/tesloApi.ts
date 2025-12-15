import axios from "axios";

const tesloApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

//TODO: Interceptores
tesloApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`; // Se manda el token en cada request
  }
  return config;
});

export { tesloApi };
