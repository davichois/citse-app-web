import Link from "next/link";

import { PlusCircleIcon } from "@heroicons/react/outline";
import { Typography } from "../../../contents";

export const ItemCreation = ({ title = "Nuevo", route = "#" }) => {
  return (
    <div className="mb-5 mt-1">
      <Link href={route}>
        <a className="flex w-fit items-center space-y-1 space-x-2 md:flex-row md:space-x-2 md:items-end cursor-pointer hover:text-gray-500">
          <Typography
            text={title}
            fontSize={"16px"}
            fontWeight={"300"}
            variant={"secandary"}
          />
          <PlusCircleIcon className={"w-6 text-yellow-500"} />
        </a>
      </Link>
    </div>
  );
};
