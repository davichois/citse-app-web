import { TrashIcon } from "@heroicons/react/outline";

import { Typography } from "../../../contents";
import { deleteEndPoint } from "../../../utils";
import { ItemNavBar } from "../Item";

export const HeaderCard = ({
  type = "super-user",
  title = "NO TITULO",
  id = 0,
}) => {
  const handleEliminated = async () => {
    if (id != 0) {
      return await deleteEndPoint({ path: "/negocio/proyecto/", id: id });
    }
    return;
  };

  return (
    <div className="flex justify-between relative">
      <Typography
        text={title}
        fontSize={"14px"}
        fontWeight={"500"}
        variant={"primary"}
      />
      {type == "super-user" ? (
        <div className="text-red-400" onClick={handleEliminated}>
          <ItemNavBar Icon={TrashIcon} title={""} route={""} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
