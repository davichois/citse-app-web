import axios from "axios";

const citseApi = axios.create({
  baseURL: "http://localhost:8080/api",
});

// // configuracion de interceptores - JWT o configuracion en cada peticion.

// // Request interceptor for API calls
// citseApi.interceptors.request.use(
//   async (config) => {
//     const value = await redisClient.get(rediskey);
//     const keys = JSON.parse(value);
//     config.headers = {
//       Authorization: `Bearer ${keys.access_token}`,
//       Accept: "application/json",
//       "Content-Type": "application/x-www-form-urlencoded",
//     };
//     return config;
//   },
//   (error) => {
//     Promise.reject(error);
//   }
// );

// // Response interceptor for API calls
// citseApi.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   async function (error) {
//     const originalRequest = error.config;
//     if (error.response.status === 403 && !originalRequest._retry) {
//       originalRequest._retry = true;
//       const access_token = await refreshAccessToken();
//       axios.defaults.headers.common["Authorization"] = "Bearer " + access_token;
//       return axiosApiInstance(originalRequest);
//     }
//     return Promise.reject(error);
//   }
// );

export default citseApi;
