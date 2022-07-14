import { CardProjection } from "../../../components";
import { PageGeneralLayout } from "../../../layouts/PageGeneralLayout";
import { getInfoEndPoint } from "../../../utils";

const HomeUser = ({talleres}) => {
  return (
    <>
      <PageGeneralLayout>
        <div className="flex gap-3 flex-col md:flex-row md:flex-wrap md:justify-between justify-start overflow-scroll h-5/6">
          {talleres.map((taller)=>(
            <CardProjection key={taller.id} type={"user"} id={taller.id} title={taller.nombre} descripcion={taller.descripcion}/>
          ))}
        </div>
      </PageGeneralLayout>
    </>
  );
};

export const getServerSideProps = async (ctx) => {
  const data = await getInfoEndPoint({ path: `/negocio/taller/` });

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
      talleres: data,
    },
  };
};

export default HomeUser;
