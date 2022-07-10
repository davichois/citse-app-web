import { HeaderProjection } from "../../../components";
import { PageGeneralLayout } from "../../../layouts/PageGeneralLayout";
import { getInfoEndPoint } from "../../../utils";

const WorkshopId = ({ taller }) => {
  return (
    <>
      <PageGeneralLayout>
        <HeaderProjection proyection={taller} origin={"taller"} />
        {/* Asignacion de cuestionario o creacion */}
        {/* Creacion de cronograma del taller */}
      </PageGeneralLayout>
    </>
  );
};

export const getServerSideProps = async ({ params }) => {
  const { id } = params;

  const data = await getInfoEndPoint({ path: `/negocio/taller/${id}` });

  return {
    props: {
      taller: data,
    },
  };
};

export default WorkshopId;
