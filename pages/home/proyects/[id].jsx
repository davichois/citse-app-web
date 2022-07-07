import { PageGeneralLayout } from "../../../layouts/PageGeneralLayout";
import { getInfoEndPoint } from "../../../utils";

const proyectId = ({ proyecto }) => {
  return (
    <>
      <PageGeneralLayout>
       
      </PageGeneralLayout>
    </>
  );
};

export const getStaticPaths = async (ctx) => {
  const data = await getInfoEndPoint({ path: "/negocio/proyecto/" });

  return {
    paths: data.map((proyecto) => ({ params: { id: proyecto.id.toString() } })),
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params }) => {
  const { id } = params;

  const data = await getInfoEndPoint({ path: `/negocio/proyecto/${id}` });

  return {
    props: {
      proyecto: data,
    },
    revalidate: 600,
  };
};

export default proyectId;
