import { CardActivitiUser } from "../../components";
import { Typography } from "../../contents";
import { PageGeneralLayout } from "../../layouts/PageGeneralLayout";

const ItineraryPage = () => {
  return (
    <>
      <PageGeneralLayout>
        <div className="flex gap-3 flex-col md:items-center m-auto justify-start overflow-scroll h-5/6 shadow-slate-200 shadow-xl rounded-lg p-5 md:p-10 md:max-w-xl">
          <div className="text-center pb-5">
            <Typography
              text={"Itinerario"}
              fontSize={"22px"}
              fontWeight={"400"}
            />
          </div>
          <CardActivitiUser />
          <CardActivitiUser />
          <CardActivitiUser />
          <CardActivitiUser />
          <CardActivitiUser />
          <CardActivitiUser />
        </div>
      </PageGeneralLayout>
    </>
  );
};

export default ItineraryPage;
