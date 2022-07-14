import { CardActivitiUser } from "../../components";
import { Typography } from "../../contents";
import { PageGeneralLayout } from "../../layouts/PageGeneralLayout";
import { getInfoEndPoint } from "../../utils";

const ItineraryPage = ({ talleres }) => {
  return (
    <>
      <PageGeneralLayout>
        <div className="flex gap-3 flex-col md:items-center m-auto justify-start overflow-scroll h-5/6 shadow-slate-200 shadow-xl rounded-lg p-5 md:p-10 md:max-w-xl">
          <div className="text-center pb-5">
            <Typography
              text={"Itinerario"}
              fontSize={"22px"}
              fontWeight={"400"}
            />
          </div>
          {talleres != undefined
            ? talleres.map((taller) => (
                <CardActivitiUser
                  key={taller.id}
                  id={taller.id}
                  actividad={taller.actividad.noTipo}
                  user={`${taller.personaPrograma.persona.noPersona} ${persona.personaPrograma.persona.apPaterno} ${persona.personaPrograma.persona.apMaterno}`}
                />
              ))
            : ""}
        </div>
      </PageGeneralLayout>
    </>
  );
};

export const getServerSideProps = async ({ params }) => {
  const { id } = params;

  const data = await getInfoEndPoint({
    path: `/participante/PPTaller/taller/${id}`,
  });

  return {
    props: {
      talleres: data,
    },
  };
};

export default ItineraryPage;
