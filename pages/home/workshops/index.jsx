import { CardProjection, ItemCreation } from "../../../components";
import { PageGeneralLayout } from "../../../layouts/PageGeneralLayout";
import { getInfoEndPoint } from "../../../utils";

const workShopPage = ({ talleres }) => {
  return (
    <>
      <PageGeneralLayout>
        <ItemCreation route={"/home/workshops/creation"} />
        <div className="flex gap-3 flex-col md:flex-row md:flex-wrap lg:justify-start md:justify-between justify-start overflow-scroll h-5/6">
          {/* Content */}
          {talleres.map((taller) => (
            <CardProjection
              type={"super-user"}
              key={taller.id}
              title={taller.nombre}
              descripcion={taller.descripcion}
              id={taller.id}
              origin={"workshops"}
              callOrigin={"taller"}
            />
          ))}
        </div>
      </PageGeneralLayout>
    </>
  );
};

export const getStaticProps = async (ctx) => {
  const data = await getInfoEndPoint({ path: "/negocio/taller/" });

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
    revalidate: 60, // 60 * 1 - 1min
  };
};

export default workShopPage;
