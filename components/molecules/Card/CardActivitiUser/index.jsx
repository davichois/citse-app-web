import { Typography } from "../../../../contents";
import { Avatar } from "../../../atoms";

export const CardActivitiUser = ({ user, actividad, id}) => {
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
          <Typography text={actividad} fontSize={"18px"} fontWeight={"300"} />
          <Typography
            text={user}
            fontSize={"11px"}
            fontWeight={"200"}
            variant={"secondary"}
          />
        </div>
        <Avatar letra={user.substr(0,1)} />
      </div>
    </>
  );
};
