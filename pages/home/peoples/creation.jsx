import { FormPerson } from "../../../components";
import { PageGeneralLayout } from "../../../layouts/PageGeneralLayout";

const creationPage = () => {
  return (
    <>
      <PageGeneralLayout>
        <div className="space-y-10 pt-5 md:text-lg lg:text-xl">
          <h3 className="font-medium ">Creacion de Usuario</h3>
          <FormPerson />
        </div>
      </PageGeneralLayout>
    </>
  );
};

export default creationPage;
