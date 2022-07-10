import axios from "axios";

const citseApi = axios.create({
  baseURL: "http://localhost:8080/api",
});

export default citseApi;
