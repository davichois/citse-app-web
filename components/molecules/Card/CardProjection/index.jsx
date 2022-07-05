import { useRouter } from "next/router";

import {
  ViewBoardsIcon,
  DocumentRemoveIcon,
  ClipboardListIcon,
} from "@heroicons/react/outline";

import { Typography } from "../../../../contents";
import { HeaderCard, ItemActionCard } from "../../../atoms";

export const CardProjection = ({
  type,
  title,
  descripcion = "No descripcion",
  id = 0,
  origin = "",
}) => {
  const router = useRouter();

  const onNavigationCard = () => {
    router.push(`/home/${origin}/${id}`);
  };

  return (
    <>
      <div
        className="w-full h-full bg-transparent border-2 border-green-900 rounded-md md:w-96 px-2 py-3 cursor-pointer"
        onClick={onNavigationCard}
      >
        {/* Header Card */}
        <HeaderCard title={title} type={type} id={id} />
        {/* Descripcion Card */}
        <Typography
          text={descripcion}
          fontSize={"10px"}
          variant={"secondary"}
        />
        {type == "user" ? (
          <div className="flex justify-between pt-4">
            <ItemActionCard Icon={ViewBoardsIcon} title={"itinerario"} />
            <ItemActionCard Icon={DocumentRemoveIcon} title={"Quiz"} />
            <ItemActionCard
              Icon={ClipboardListIcon}
              title={"Lista Comunitarios"}
            />
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};
