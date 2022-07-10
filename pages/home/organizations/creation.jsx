import { FormOrganization } from "../../../components";
import { PageGeneralLayout } from "../../../layouts/PageGeneralLayout";

const CreationPage = () => {
  return (
    <>
      <PageGeneralLayout>
        <div className="space-y-10 pt-5 md:text-lg lg:text-xl">
          <h3 className="font-medium ">Creacion de Organización</h3>
          <FormOrganization />
        </div>
      </PageGeneralLayout>
    </>
  );
};

export default CreationPage;
