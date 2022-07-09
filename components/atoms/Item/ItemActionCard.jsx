import Link from "next/link";
import { Typography } from "../../../contents";

export const ItemActionCard = ({ Icon, title = "", route = "" }) => {
  return (
    <Link href={route}>
      <div className="p-1 px-9 sm:px-2 border-2 border-green-900 rounded-md">
        <a className="flex flex-col items-center sm:flex-row sm:items-end m-auto space-x-1 md:flex-row md:space-x-2 md:items-end cursor-pointer hover:text-gray-500">
          <Icon className="h-5 w-5 text-green-900" />
          <div className="hidden sm:inline">
            <Typography
              text={title}
              fontSize={"13px"}
              fontWeight={"300"}
              variant={"primary"}
            />
          </div>
        </a>
      </div>
    </Link>
  );
};
