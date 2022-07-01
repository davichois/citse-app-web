import { DotsCircleHorizontalIcon } from "@heroicons/react/outline";

import { Typography } from "../../../contents";
import { ItemNavBar } from "../Item";

export const HeaderCard = () => {
  return (
    <div className="flex justify-between">
      <Typography
        text={"AYLLU SINCHI"}
        fontSize={"14px"}
        fontWeight={"500"}
        variant={"primary"}
      />
      <ItemNavBar Icon={DotsCircleHorizontalIcon} />
    </div>
  );
};
