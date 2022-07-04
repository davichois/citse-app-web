import axios from "axios";

const citseApi = axios.create({
  baseURL: "",
});

// configuracion de interceptores - JWT o configuracion en cada peticion.

export default citseApi;
