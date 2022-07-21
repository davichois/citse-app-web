import axios from "axios";

export const getInfoEndPoint = async ({ path = "", id = 0 }) => {
  try {
    if (id == 0) {
      const { data } = await axios.get(`http://20.197.181.20:8090/api${path}`);
      return data;
    } else {
      const { data } = await axios.get(
        `http://20.197.181.20:8090/api${path}/${id}`
      );
      return data;
    }
  } catch (error) {
    return null;
  }
};

export const postEndPoint = async ({ path = "", body }) => {
  try {
    console.log(path);
    const res = await axios.post(`http://20.197.181.20:8090/api${path}`, body);
    console.log(res);
    return res;
  } catch (error) {
    return null;
  }
};

export const deleteEndPoint = async ({ path = "", id = 0 }) => {
  try {
    if (id != 0) {
      const consult = await axios.delete(
        `http://20.197.181.20:8090/api${path}${id}`
      );
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
    const res = await axios.post(`http://20.197.181.20:8090/api${path}`, body, {
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
