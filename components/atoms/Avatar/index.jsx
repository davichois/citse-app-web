import { Typography } from "../../../contents";

export const Avatar = ({ letra = "C" }) => {
  return (
    <>
      <div className="rounded-full cursor-pointer h-7 w-7 bg-slate-600 text-center text-white">
        <Typography text={letra} variant="tertiary" fontSize="13px" fontWeight="800"/>
      </div>
    </>
  );
};
