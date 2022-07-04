import { useState } from "react";

import { NavBarHome, NavBarHomeUser } from "../components";
import { Typography } from "../contents";

export const PageGeneralLayout = ({ children }) => {
  const [superUser, setSuperUser] = useState(true);

  return (
    <>
      <nav>{superUser == false ? <NavBarHomeUser /> : <NavBarHome />}</nav>
      <main>{children}</main>
      <footer className="flex justify-end mt-12 mb-3 md:hidden">
        <Typography
          text={"© CITSE 2021 / HOOK-UP"}
          fontSize={"11px"}
          fontWeight={"500"}
          variant={"secondary"}
        />
      </footer>
    </>
  );
};
