import axios from "axios";

const pokeApi = axios.create({
  baseURL: "",
});

// configuracion de interceptores - JWT o configuracion en cada peticion.

export default pokeApi;
