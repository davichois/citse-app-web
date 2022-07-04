import { CardActivitiesUser } from "../../../components";
import { PageGeneralLayout } from "../../../layouts/PageGeneralLayout";

const homeUser = () => {
  return (
    <>
      <PageGeneralLayout>
        <div className="flex gap-3 flex-col md:flex-row md:flex-wrap md:justify-between justify-start overflow-scroll h-5/6">
          <CardActivitiesUser />
          <CardActivitiesUser />
          <CardActivitiesUser />
          <CardActivitiesUser />
        </div>
      </PageGeneralLayout>
    </>
  );
};

export default homeUser;
