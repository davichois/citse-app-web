import { CardActivities, ItemCreation } from "../../../../components";
import { PageGeneralLayout } from "../../../../layouts/PageGeneralLayout";

const workShopPage = () => {
  return (
    <>
      <PageGeneralLayout>
        <ItemCreation route={""} />
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

export default workShopPage;
