import { useRouter } from "next/router";
import { HeaderProjection } from "../../../components";
import { PageGeneralLayout } from "../../../layouts/PageGeneralLayout";
import { getInfoEndPoint } from "../../../utils";

const ProgramId = ({ programa }) => {
  return (
    <>
      <PageGeneralLayout>
        <HeaderProjection proyection={programa} origin={"programa"} />
      </PageGeneralLayout>
    </>
  );
};

export const getServerSideProps = async ({ params }) => {
  const { id } = params;

  const data = await getInfoEndPoint({ path: `/negocio/programa/${id}` });

  return {
    props: {
      programa: data,
    },
  };
};

export default ProgramId;
