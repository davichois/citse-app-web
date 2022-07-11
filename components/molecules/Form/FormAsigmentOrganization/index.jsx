import { useEffect, useState } from "react";
import { Input, Typography } from "../../../../contents";
import { getInfoEndPoint, postEndPoint } from "../../../../utils";
import { Button } from "../../../atoms";

export const FormAsigmentOrganization = ({ proyection }) => {
  const [entidad, setEntidad] = useState("");
  const [data, setData] = useState();

  useEffect(() => {
    return async () => {
      const response = await getInfoEndPoint({ path: `/entidad/entidad/` });
      setData(response);
    };
  }, []);

  const submitForm = async () => {
    if (entidad == "" || entidad == "0") {
      return;
    }

    let data = {
      entidad,
      esEntidadProyecto: true,
      proyecto: { id: proyection.id },
    };

    console.log(data);
    return await postEndPoint({
      path: `/negocio/entidadProyecto/`,
      body: data,
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
            {data == undefined
              ? ""
              : data.map((res) => (
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
