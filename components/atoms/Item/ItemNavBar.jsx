import Link from "next/link";
import { Typography } from "../../../contents";

export const ItemNavBar = ({ Icon, title, route = "/" }) => {
  return (
    <>
      <Link href={route}>
        <a  className="flex flex-col items-center space-y-1 md:flex-row md:space-x-2 md:items-end cursor-pointer hover:scale-110 duration-700 ease-out hover:text-gray-500">
          <Icon className="h-5 w-5 md:h-6 md:w-6" />
          <Typography
            text={title}
            fontSize={"11px"}
            fontWeight={"500"}
            variant={"secondary"}
          />
        </a>
      </Link>
    </>
  );
};
