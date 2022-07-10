import { CardProjection, ItemCreation } from "../../../components";
import { PageGeneralLayout } from "../../../layouts/PageGeneralLayout";
import { getInfoEndPoint } from "../../../utils";

const ProyectPage = ({ proyectos }) => {
  return (
    <>
      <PageGeneralLayout>
        <ItemCreation route={"/home/proyects/creation"} />
        <div className="flex gap-3 flex-col md:flex-row md:flex-wrap lg:justify-start md:justify-between justify-start overflow-scroll h-5/6">
          {/* Content */}
          {proyectos.map((proyecto) =>
            proyecto.estado == false ? (
              <div className="bg-slate-200" key={proyecto.id}>
                <CardProjection
                  type={"super-user"}
                  key={proyecto.id}
                  title={proyecto.nombre}
                  descripcion={proyecto.descripcion}
                  id={proyecto.id}
                  origin={"proyects"}
                  callOrigin={"proyecto"}
                />
              </div>
            ) : (
              <CardProjection
                type={"super-user"}
                key={proyecto.id}
                title={proyecto.nombre}
                descripcion={proyecto.descripcion}
                id={proyecto.id}
                origin={"proyects"}
                callOrigin={"proyecto"}
              />
            )
          )}
        </div>
      </PageGeneralLayout>
    </>
  );
};

export const getServerSideProps = async (ctx) => {
  const data = await getInfoEndPoint({ path: `/negocio/proyecto/` });

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
      proyectos: data,
    },
  };
};

export default ProyectPage;
