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

export const getStaticPaths = async (ctx) => {
  const data = await getInfoEndPoint({ path: "/negocio/taller/" });

  return {
    paths: data.map((taller) => ({ params: { id: taller.id.toString() } })),
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params }) => {
  const { id } = params;

  const data = await getInfoEndPoint({ path: `/negocio/taller/${id}` });

  return {
    props: {
      taller: data,
    },
    revalidate: 600,
  };
};

export default WorkshopId;
