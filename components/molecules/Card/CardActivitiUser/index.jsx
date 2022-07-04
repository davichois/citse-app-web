import { Typography } from "../../../../contents";
import { Avatar } from "../../../atoms";

export const CardActivitiUser = ({ letra = "A" }) => {
  function handleEliminatedActiviti() {
    console.log("Eliminated Activiti");
  }
  return (
    <>
      <div
        onDoubleClick={handleEliminatedActiviti}
        className="flex items-center justify-between p-5 border-2 border-green-900 hover:bg-slate-50 rounded-md max-w-lg cursor-pointer w-full"
      >
        <div className="flex flex-col">
          <Typography text={"MODERADOR"} fontSize={"18px"} fontWeight={"300"} />
          <Typography
            text={"Robert Dawney Junior"}
            fontSize={"11px"}
            fontWeight={"200"}
            variant={"secondary"}
          />
        </div>
        <Avatar letra={letra} />
      </div>
    </>
  );
};
