import { useState } from "react";
import { Input, Typography } from "../../../../contents";
import { Button } from "../../../atoms";

export const FormOrganization = () => {
  const [nombre, setNombre] = useState();
  const [alias, setAlias] = useState();
  const [feInstancia, setFeInstancia] = useState();
  const [idTipoEntidad, setIdTipoEntidad] = useState();
  const [idPadre, setIdPadre] = useState();

  return (
    <>
      <div className="flex justify-between space-x-5">
        <form className="flex flex-col items-center space-y-8 w-full md:max-w-lg md:space-y-12">
          <div className="w-full">
            <Input
              origin="form"
              placeholder="Nombre de la Organización"
              value={nombre}
              onChange={setNombre}
            />
          </div>
          <div className="w-full">
            <Input
              origin="form"
              placeholder="Alias de la Organización"
              value={alias}
              onChange={setAlias}
            />
          </div>
          <div className="w-full">
            <Input
              origin="form"
              type="date"
              value={feInstancia}
              onChange={setFeInstancia}
            />
          </div>
          <div className="w-full">
            <Input
              origin="select"
              value={idTipoEntidad}
              onChange={setIdTipoEntidad}
            >
              <option value="0">Ninguno</option>
            </Input>
          </div>
          <div className="w-full">
            <Input origin="select" value={idPadre} onChange={setIdPadre}>
              <option value="0">Ninguno</option>
            </Input>
          </div>

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
      </div>
    </>
  );
};
