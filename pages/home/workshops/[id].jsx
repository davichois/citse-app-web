import { getInfoEndPoint } from "../../../utils";

const workshopId = ({ taller }) => {
  return <div>{taller.nombre}</div>;
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

export default workshopId;
