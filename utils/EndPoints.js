import { citseApi } from "../api";

export const getInfoEndPoint = async ({
  path = "/negocio/proyecto/",
  id = 0,
}) => {
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

export const deleteEndPoint = async ({
  path = "/negocio/proyecto/",
  id = 0,
}) => {
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
