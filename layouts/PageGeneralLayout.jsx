import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { NavBarHome, NavBarHomeUser } from "../components";
import { Typography } from "../contents";

export const PageGeneralLayout = ({ children }) => {
  const [superUser, setSuperUser] = useState(true);

  const route = useRouter();

  useEffect(() => {
    if (route.pathname == "/home/user" || route.pathname == "/itinerary/[id]") {
      setSuperUser(false);
    }
  }, [route]);

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
