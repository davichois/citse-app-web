import React from "react";
import { FormProjection } from "../../../components";
import { PageGeneralLayout } from "../../../layouts/PageGeneralLayout";

const CreationPage = () => {
  return (
    <>
      <PageGeneralLayout>
        <div className="space-y-10 pt-5 md:text-lg lg:text-xl">
          <h3 className="font-medium ">Creacion de Programa</h3>
          <FormProjection origin="proyecto" state={true} callOrigin={"programa"}/>
        </div>
      </PageGeneralLayout>
    </>
  );
};

export default CreationPage;
