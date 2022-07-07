import { useState } from "react";
import { Input, Typography } from "../../../../contents";
import { Button } from "../../../atoms";

export const FormPerson = () => {
  const [noPersona, setNoPersona] = useState("");
  const [apPaterno, setApPaterno] = useState("");
  const [apMaterno, setApMaterno] = useState("");
  const [nuIndentificacion, setNuIndentificacion] = useState("");
  const [feNacimiento, setFeNacimiento] = useState();
  const [idTiIndentificacion, setIdTiIndentificacion] = useState(0);
  const [idTiPersona, setIdTiPersona] = useState(0);
  const [idTiEsCivil, setIdTiEsCivil] = useState(0);

  return (
    <>
      <div className="flex justify-between space-x-5">
        <form className="flex flex-col items-center space-y-8 w-full md:max-w-lg md:space-y-8">
          <div className="w-full">
            <Input
              origin="form"
              placeholder="Nombre de la Persona"
              value={noPersona}
              onChange={setNoPersona}
            />
          </div>
          <div className="w-full">
            <Input
              origin="form"
              placeholder="Apelliddo paterno"
              value={apPaterno}
              onChange={setApPaterno}
            />
          </div>
          <div className="w-full">
            <Input
              origin="form"
              placeholder="Apelliddo materno"
              value={apMaterno}
              onChange={setApMaterno}
            />
          </div>
          <div className="w-full">
            <Input
              origin="form"
              placeholder="Numero de Identificacion"
              value={nuIndentificacion}
              onChange={setNuIndentificacion}
            />
          </div>
          <div className="w-full">
            <Input
              origin="form"
              type="date"
              value={feNacimiento}
              onChange={setFeNacimiento}
            />
          </div>
          <div className="w-full">
            <Input
              origin="select"
              value={idTiIndentificacion}
              onChange={setIdTiIndentificacion}
            >
              <option value={0}>
                Selecciona Tipo de Documento de Identidad
              </option>
            </Input>
          </div>
          <div className="w-full">
            <Input
              origin="select"
              value={idTiPersona}
              onChange={setIdTiPersona}
            >
              <option value={0}>Selecciona Tipo de Persona</option>
            </Input>
          </div>
          <div className="w-full">
            <Input
              origin="select"
              value={idTiEsCivil}
              onChange={setIdTiEsCivil}
            >
              <option value={0}>Selecciona Tipo de Estado Civil</option>
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
