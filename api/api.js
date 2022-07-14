import axios from "axios";

const citseApi = axios.create({
  baseURL: "http://20.197.181.20:8090/api",
});

citseApi.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGVsbGlkb3MiOiJDb3JuZWpvIFZpbGxhbnVldmEiLCJlc3RhZG8iOnRydWUsIm51bWVybyI6IjU4OTYzODkiLCJ1c2VyX25hbWUiOiI1ODk2Mzg5Iiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sImV4cCI6MTY1NzgxMTM1NSwibm9tYnJlIjoiR2xvcmlhIiwiYXV0aG9yaXRpZXMiOlsiUk9MRV9ET0NFTlRFIl0sImp0aSI6Im13OHViWjVkSDR3b2hRSUFvRzhiT2xkVFRydyIsImNsaWVudF9pZCI6ImZyb250ZW5kQXBwIn0.wIHsV_mx1yT9s9MkxcDLRwaxQD6AmQvxVaKtfrIJAkE`;
    console.log(config);
    return config;
  },
  (error) => {
    return console.log(error);
  }
);

export default citseApi;
