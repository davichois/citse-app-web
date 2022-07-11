import { CardProjection } from "../../../components";
import { PageGeneralLayout } from "../../../layouts/PageGeneralLayout";

const HomeUser = () => {
  return (
    <>
      <PageGeneralLayout>
        <div className="flex gap-3 flex-col md:flex-row md:flex-wrap md:justify-between justify-start overflow-scroll h-5/6">
          <CardProjection type={"user"} id={2} />
        </div>
      </PageGeneralLayout>
    </>
  );
};


export default HomeUser;
