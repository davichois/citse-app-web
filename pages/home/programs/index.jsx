import { CardProjection, ItemCreation } from "../../../components";
import { PageGeneralLayout } from "../../../layouts/PageGeneralLayout";
import { getInfoEndPoint } from "../../../utils";

const programPage = ({ programas }) => {
  return (
    <>
      <PageGeneralLayout>
        <ItemCreation route={""} />
        <div className="flex gap-3 flex-col md:flex-row md:flex-wrap lg:justify-start md:justify-between justify-start overflow-scroll h-5/6">
          {/* Content */}
          {programas.map((programa) => (
            <CardProjection
              type={"super-user"}
              key={programa.id}
              title={programa.nombre}
              descripcion={programa.descripcion}
              id={programa.id}
              origin={"programs"}
            />
          ))}
        </div>
      </PageGeneralLayout>
    </>
  );
};

export const getStaticProps = async (ctx) => {
  const data = await getInfoEndPoint({ path: "/negocio/programa/" });

  if (!data) {
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }

  return {
    props: {
      programas: data,
    },
    revalidate: 60, // 60 * 1 - 1min
  };
};

export default programPage;
