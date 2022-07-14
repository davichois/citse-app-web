import axios from "axios";

const citseApi = axios.create({
  baseURL: "http://20.197.181.20:8090/api",
});

citseApi.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGVsbGlkb3MiOiJDb3JuZWpvIFZpbGxhbnVldmEiLCJlc3RhZG8iOnRydWUsIm51bWVybyI6IjU4OTYzODkiLCJ1c2VyX25hbWUiOiI1ODk2Mzg5Iiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sImV4cCI6MTY1NzgxODc2NCwibm9tYnJlIjoiR2xvcmlhIiwiYXV0aG9yaXRpZXMiOlsiUk9MRV9ET0NFTlRFIl0sImp0aSI6ImlxMEdBMGd4TlhiTXhoZkNEM3R2aEdtRWs3VSIsImNsaWVudF9pZCI6ImZyb250ZW5kQXBwIn0.8ieCHL4x_kJekMMb_Ep-4rqegOZ7H4yZPF7uQHQ9GvE`;
    console.log(config);
    return config;
  },
  (error) => {
    return console.log(error);
  }
);

export default citseApi;
