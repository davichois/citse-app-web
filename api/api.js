import axios from "axios";

const citseApi = axios.create({
  baseURL: "http://localhost:8090/api",
});

export default citseApi;
