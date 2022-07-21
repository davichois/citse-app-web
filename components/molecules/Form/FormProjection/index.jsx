import { useEffect, useState } from "react";
import { Input, Typography } from "../../../../contents";
import { getInfoEndPoint, postEndPoint } from "../../../../utils";
import { Button } from "../../../atoms";

export const FormProjection = ({ origin, state, callOrigin }) => {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [objetivo, setobjetivo] = useState("");
  const [inicio, setInicio] = useState("");
  const [idPadre, setIdPadre] = useState(0);

  const [data, setData] = useState();

  useEffect(() => {
    return async () => {
      const response = await getInfoEndPoint({ path: `/negocio/${origin}/` });
      setData(response);
    };
  }, [origin]);

  // post call

  const submitFormNotParent = async () => {
    let data = { nombre, descripcion, objetivo, inicio };
    return await postEndPoint({ path: `/negocio/${callOrigin}/`, body: data });
  };

  const submitFormForParent = async () => {
    if (origin == "proyecto") {
      let data = {
        nombre,
        descripcion,
        objetivo,
        proyecto: { id: idPadre },
        inicio,
        estado: false,
      };
      return await postEndPoint({
        path: `/negocio/${callOrigin}/`,
        body: data,
      });
    } else {
      let data = {
        nombre,
        descripcion,
        objetivo,
        programa: { id: idPadre },
        inicio,
        estado: false,
      };
      return await postEndPoint({
        path: `/negocio/${callOrigin}/`,
        body: data,
      });
    }
  };

  return (
    <>
      <div className="flex justify-between space-x-5">
        <form
          className="flex flex-col items-center space-y-8 w-full md:max-w-lg md:space-y-12"
          onSubmit={(e) => {
            e.preventDefault();
            if (callOrigin == "proyecto") {
              submitFormNotParent();
            } else {
              submitFormForParent();
            }
          }}
        >
          <div className="w-full">
            <Input
              origin="form"
              placeholder="Nombre de la proyección"
              value={nombre}
              onChange={setNombre}
            />
          </div>
          <div className="w-full">
            <Input
              origin="form"
              placeholder="Descripcion"
              value={descripcion}
              onChange={setDescripcion}
            />
          </div>
          <div className="w-full">
            <Input
              origin="form"
              placeholder="Objectivo"
              value={objetivo}
              onChange={setobjetivo}
            />
          </div>
          <div className="w-full">
            <Input
              origin="form"
              type="date"
              value={inicio}
              onChange={setInicio}
            />
          </div>

          {state && (
            <div className="w-full">
              <Input origin="select" value={idPadre} onChange={setIdPadre}>
                <option value={0}>{`Seleccionar ${origin}`}</option>
                {data == undefined
                  ? ""
                  : data.map((res) => (
                      <option key={res.id} value={res.id}>
                        {res.nombre}
                      </option>
                    ))}
              </Input>
            </div>
          )}

          <div className="w-full flex justify-start space-x-5 ">
            <Button variant="underline" type="submit" origin="form">
              <Typography
                text={"Cancelar"}
                fontSize={"14px"}
                fontWeight={"400"}
              />
            </Button>
            <Button variant="filled" type="submit" origin="form">
              <Typography text={"Crear"} fontSize={"14px"} fontWeight={"400"} />
            </Button>
          </div>
        </form>

        <div className="w-2/5 h-fit rounded-md border-2 border-green-900 hidden lg:flex lg:flex-col space-y-2 px-3 py-4 cursor-pointer">
          <Typography
            text={nombre == "" ? "Nombre de la Proyección" : nombre}
            fontSize={"18px"}
            variant={"primary"}
            fontWeight={"300"}
          />
          <Typography
            text={
              descripcion == ""
                ? "Descripcion de la proyección..."
                : descripcion
            }
            fontSize={"12px"}
            variant={"secondary"}
          />
        </div>
      </div>
    </>
  );
};
