import { Typography } from "../../../../contents";
import { HeaderCard } from "../../../atoms";

export const CardProjection = () => {
  return (
    <>
      <div className="w-full h-fit  bg-transparent border-2 border-green-900 rounded-sm md:w-96 px-2 py-3">
        {/* Header Card */}
        <HeaderCard />
        {/* Descripcion Card */}
        <Typography
          text={
            "Proyecto social la cual tiene como objectivo ayudar a las personas de bajo recursos economicos en tarapoto en el caserio Quinta Elena ."
          }
          fontSize={"10px"}
          variant={"secondary"}
        />
      </div>
    </>
  );
};
