import { citseApi } from "../api";

export const getInfoEndPoint = async ({ path = "", id = 0 }) => {
  try {
    if (id == 0) {
      const { data } = await citseApi.get(`${path}`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGVsbGlkb3MiOiJDb3JuZWpvIFZpbGxhbnVldmEiLCJlc3RhZG8iOnRydWUsIm51bWVybyI6IjU4OTYzODkiLCJ1c2VyX25hbWUiOiI1ODk2Mzg5Iiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sImV4cCI6MTY1NzgyMTM2Niwibm9tYnJlIjoiR2xvcmlhIiwiYXV0aG9yaXRpZXMiOlsiUk9MRV9ET0NFTlRFIl0sImp0aSI6InpiTVRPZ3ZVeEdUbjQ4a1p6V1dIWjAtSmlvOCIsImNsaWVudF9pZCI6ImZyb250ZW5kQXBwIn0.mQ3XpQ4-3DzdE8HfykwXqxW2jVq0p80LPHjzEUa2Ho0",
        },
      });
      return data;
    } else {
      const { data } = await citseApi.get(`${path}/${id}`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGVsbGlkb3MiOiJDb3JuZWpvIFZpbGxhbnVldmEiLCJlc3RhZG8iOnRydWUsIm51bWVybyI6IjU4OTYzODkiLCJ1c2VyX25hbWUiOiI1ODk2Mzg5Iiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sImV4cCI6MTY1NzgyMTM2Niwibm9tYnJlIjoiR2xvcmlhIiwiYXV0aG9yaXRpZXMiOlsiUk9MRV9ET0NFTlRFIl0sImp0aSI6InpiTVRPZ3ZVeEdUbjQ4a1p6V1dIWjAtSmlvOCIsImNsaWVudF9pZCI6ImZyb250ZW5kQXBwIn0.mQ3XpQ4-3DzdE8HfykwXqxW2jVq0p80LPHjzEUa2Ho0",
        },
      });
      return data;
    }
  } catch (error) {
    return null;
  }
};

export const postEndPoint = async ({ path = "", body }) => {
  try {
    const res = await citseApi.post(path, body, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGVsbGlkb3MiOiJDb3JuZWpvIFZpbGxhbnVldmEiLCJlc3RhZG8iOnRydWUsIm51bWVybyI6IjU4OTYzODkiLCJ1c2VyX25hbWUiOiI1ODk2Mzg5Iiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sImV4cCI6MTY1NzgyMjQzNiwibm9tYnJlIjoiR2xvcmlhIiwiYXV0aG9yaXRpZXMiOlsiUk9MRV9ET0NFTlRFIl0sImp0aSI6IkNHZ1hVM21Pc3hHMW9tY3ZmVlZFTEdfNi1LMCIsImNsaWVudF9pZCI6ImZyb250ZW5kQXBwIn0.rr10yiWUIkt0sBzexW40Ga-IxxYfDK91_fPerRexh98",
      },
    });
    return res;
  } catch (error) {
    return null;
  }
};

export const deleteEndPoint = async ({ path = "", id = 0 }) => {
  try {
    if (id != 0) {
      const consult = await citseApi.delete(`${path}${id}`);
      console.log(consult);
      return consult;
    }
    return null;
  } catch (error) {
    return null;
  }
};

// Auth

const username = "frontendApp";
const password = "123456";

const token = Buffer.from(`${username}:${password}`, "utf8").toString("base64");

export const postTokenGenerator = async ({ path = "", body }) => {
  try {
    const res = await citseApi.post(path, body, {
      headers: {
        Authorization: `Basic ${token}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    return res;
  } catch (error) {
    return "data";
  }
};
