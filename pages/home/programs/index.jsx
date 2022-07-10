import { CardProjection, ItemCreation } from "../../../components";
import { PageGeneralLayout } from "../../../layouts/PageGeneralLayout";
import { getInfoEndPoint } from "../../../utils";

const ProgramPage = ({ programas }) => {
  return (
    <>
      <PageGeneralLayout>
        <ItemCreation route={"/home/programs/creation"} />
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
              callOrigin={"programa"}
            />
          ))}
        </div>
      </PageGeneralLayout>
    </>
  );
};

export const getServerSideProps = async (ctx) => {
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
  };
}

export default ProgramPage;
