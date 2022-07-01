import { Typography } from "../../../contents";

export const ItemNavBar = ({ Icon, title }) => {
  return (
    <div className="flex flex-col items-center space-y-1 md:flex-row md:space-x-2 md:items-end cursor-pointer hover:scale-110 duration-700 ease-out hover:text-gray-500">
      <Icon className="h-5 w-5 md:h-6 md:w-6" />
      <Typography
        text={title}
        fontSize={"11px"}
        fontWeight={"500"}
        variant={"secondary"}
      />
    </div>
  );
};
