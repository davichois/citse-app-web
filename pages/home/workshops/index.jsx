import { CardActivities } from "../../../components";
import { PageGeneralLayout } from "../../../layouts/PageGeneralLayout";

const homePage = () => {
  return (
    <>
      <PageGeneralLayout>
        <div className="flex gap-3 flex-col md:flex-row md:flex-wrap md:justify-between justify-start overflow-scroll h-5/6">
          {/* Content */}
          <CardActivities />
          <CardActivities />
          <CardActivities />
        </div>
      </PageGeneralLayout>
    </>
  );
};

export default homePage;
