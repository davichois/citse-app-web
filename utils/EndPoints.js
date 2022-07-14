import { citseApi } from "../api";

export const getInfoEndPoint = async ({ path = "", id = 0 }) => {
  try {
    if (id == 0) {
      const { data } = await citseApi.get(`${path}`);
      return data;
    } else {
      const { data } = await citseApi.get(`${path}/${id}`);
      return data;
    }
  } catch (error) {
    return null;
  }
};

export const postEndPoint = async ({ path = "", body }) => {
  try {
    const res = await citseApi.post(path, body, {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
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
