import { getInfoEndPoint } from "../../../utils";

const programId = ({ programa }) => {
  return <div>{programa.nombre}</div>;
};

export const getStaticPaths = async (ctx) => {
  const data = await getInfoEndPoint({ path: "/negocio/programa/" });

  return {
    paths: data.map((programa) => ({ params: { id: programa.id.toString() } })),
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params }) => {
  const { id } = params;

  const data = await getInfoEndPoint({ path: `/negocio/programa/${id}` });

  return {
    props: {
      programa: data,
    },
    revalidate: 600,
  };
};

export default programId;