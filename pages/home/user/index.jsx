import { CardProjectionUser } from "../../../components";
import { PageGeneralLayout } from "../../../layouts/PageGeneralLayout";

const homeUser = () => {
  return (
    <>
      <PageGeneralLayout>
        <div className="flex gap-3 flex-col md:flex-row md:flex-wrap md:justify-between justify-start overflow-scroll h-5/6">
          <CardProjectionUser />
          <CardProjectionUser />
          <CardProjectionUser />
          <CardProjectionUser />
        </div>
      </PageGeneralLayout>
    </>
  );
};

export default homeUser;
