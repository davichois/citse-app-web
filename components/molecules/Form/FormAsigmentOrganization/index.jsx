import axios from "axios";
import { useEffect, useState } from "react";
import { Input, Typography } from "../../../../contents";
import { getInfoEndPoint, postEndPoint } from "../../../../utils";
import { Button } from "../../../atoms";

export const FormAsigmentOrganization = ({ proyection }) => {
  const [entidad, setEntidad] = useState("");
  const [data, setData] = useState();

  useEffect(() => {
    return async () => {
      const response = await axios.get('http://20.197.181.20:8090/api/entidad/entidad/');
      setData(response.data);
    };
  }, []);

  const submitForm = async () => {
    if (entidad == "" || entidad == "0") {
      return;
    }

    let formi = {
      entidad,
      esEntidadProyecto: true,
      proyecto: { id: proyection.id },
    };

    console.log(formi);
    return await postEndPoint({
      path: `/negocio/entidadProyecto/`,
      body: formi,
    });
  };

  return (
    <>
      <br />
      <div className="pt-10 space-y-5 max-w-md">
        <h3>Asignacion de Entidades : </h3>
        <form
          className="space-y-5"
          onSubmit={(e) => {
            e.preventDefault();
            submitForm();
          }}
        >
          <Input
            origin="select"
            placeholder="Nombre de la proyección"
            value={entidad}
            onChange={setEntidad}
          >
            <option value={0}>{`Seleccionar entidad`}</option>
            {data && data.map((res) => (
                  <option key={res.id} value={res.id}>
                    {res.nombre + " - " + res.alias}
                  </option>
                ))}
          </Input>

          <div className="w-full flex justify-start ">
            <Button variant="filled" type="submit" origin="form">
              <Typography
                text={"Guardar Cambios"}
                fontSize={"14px"}
                fontWeight={"400"}
              />
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};
