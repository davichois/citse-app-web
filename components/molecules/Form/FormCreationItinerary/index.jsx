import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Input, Typography } from "../../../../contents";
import { getInfoEndPoint, postEndPoint } from "../../../../utils";
import { Button } from "../../../atoms";
import { CardActivitiUser } from "../../Card/CardActivitiUser";

export const FormCreationItinerary = () => {
  let id = useRouter().query.id;

  const [reaload, setReaload] = useState(true);

  const [personaPrograma, setPersonaPrograma] = useState();
  const [actividadPrograma, setActividadPrograma] = useState();

  const [personaActividadData, setPersonaActividadData] = useState([]);
  const [personaProgramadata, setPersonaProgramaData] = useState();
  const [actividadesData, setActividadesData] = useState();

  useEffect(() => {
    return async () => {
      const ppd = await axios.get(
        `http://20.197.181.20:8090/api/negocio/personaPrograma/`
      );
      setPersonaProgramaData(ppd.data);

      const ap = await axios.get(
        `http://20.197.181.20:8090/api/tipo/familia/5`
      );
      setActividadesData(ap.data);

      const pa = await axios.get(
        `http://20.197.181.20:8090/api/participante/PPTaller/taller/${id}`
      );
      setPersonaActividadData(pa.data);

      setReaload(false);

      console.log("hola");
    };
  }, [id, reaload]);

  const submitForm = async () => {
    if (actividadPrograma == "0" || personaPrograma == "0") {
      return;
    }
    let data = {
      idPersonaPrograma: personaPrograma,
      idTaller: id,
      idActividad: actividadPrograma,
    };
    return await postEndPoint({ path: `/participante/PPTaller/`, body: data });
  };

  return (
    <>
      <br />
      <div className="flex w-full justify-between">
        <form
          className="space-y-5 mt-10"
          onSubmit={(e) => {
            e.preventDefault();
            submitForm();
            setReaload(true);
          }}
        >
          <h3>Asignacion a Cronograma de Taller : </h3>
          <Input
            origin="select"
            value={personaPrograma}
            onChange={setPersonaPrograma}
          >
            <option value={0}>{`Seleccionar persona`}</option>
            {personaProgramadata != undefined
              ? personaProgramadata.map((pp) => (
                  <option key={pp.id} value={pp.id}>
                    {`${pp.persona.noPersona} ${pp.persona.apPaterno} ${pp.persona.apMaterno}`}
                  </option>
                ))
              : "cargando data"}
          </Input>
          <Input
            origin="select"
            value={actividadPrograma}
            onChange={setActividadPrograma}
          >
            <option value={0}>{`Seleccionar actividad`}</option>
            {actividadesData != undefined
              ? actividadesData.tipos.map((actividad) => (
                  <option key={actividad.idTipo} value={actividad.idTipo}>
                    {actividad.noTipo}
                  </option>
                ))
              : "cargando data"}
          </Input>

          <Button variant="filled" origin="form" type="submit">
            <Typography text={"Asignar"} fontSize={"14px"} fontWeight={"400"} />
          </Button>
        </form>
        <div className="w-2/5 hidden lg:block space-y-3">
          <h3 className="pb-5">Previsualizacion de Actividades : </h3>
          {personaActividadData != undefined
            ? personaActividadData.map((persona) => (
                <CardActivitiUser
                  key={persona.id}
                  id={persona.id}
                  actividad={persona.actividad.noTipo}
                  user={`${persona.personaPrograma.persona.noPersona} ${persona.personaPrograma.persona.apPaterno} ${persona.personaPrograma.persona.apMaterno}`}
                />
              ))
            : ""}
        </div>
      </div>
    </>
  );
};
