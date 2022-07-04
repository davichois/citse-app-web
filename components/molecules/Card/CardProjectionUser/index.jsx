import { Typography } from "../../../../contents";
import { HeaderCard, ItemActionCard } from "../../../atoms";
import {
  ViewBoardsIcon,
  DocumentRemoveIcon,
  ClipboardListIcon,
} from "@heroicons/react/outline";

export const CardProjectionUser = () => {
  return (
    <>
      <div className="w-full h-fit  bg-transparent border-2 border-green-900 rounded-sm md:w-96 px-2 py-3">
        {/* Header Card */}
        <HeaderCard type="user" />
        {/* Descripcion Card */}
        <Typography
          text={
            "Proyecto social la cual tiene como objectivo ayudar a las personas de bajo recursos economicos en tarapoto en el caserio Quinta Elena ."
          }
          fontSize={"10px"}
          variant={"secondary"}
        />
        <div className="flex justify-between pt-4">
          <ItemActionCard Icon={ViewBoardsIcon} title={"itinerario"} />
          <ItemActionCard Icon={DocumentRemoveIcon} title={"Quiz"} />
          <ItemActionCard
            Icon={ClipboardListIcon}
            title={"Lista Comunitarios"}
          />
        </div>
      </div>
    </>
  );
};
