import { useEffect, useState } from "react";

import {
  CalendarIcon,
  ClipboardListIcon,
  CollectionIcon,
  OfficeBuildingIcon,
  PlusIcon,
  UserCircleIcon,
  UserGroupIcon,
  UserIcon,
} from "@heroicons/react/outline";

import { ItemNavBar, Avatar } from "../../../index";
import { Logo } from "../../../../contents";

export const NavBarHome = () => {
  const [menuActive, setMenuActive] = useState(false);

  useEffect(() => setMenuActive(false), []);

  const handleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div className="pb-7 flex items-center justify-between relative">
      <div>
        <Logo>CITSE</Logo>
      </div>
      <div className="flex space-x-3 lg:space-x-9">
        <ItemNavBar
          Icon={CollectionIcon}
          title={"Proyecto"}
          route={"/home/proyects"}
        />
        <ItemNavBar
          Icon={CalendarIcon}
          title={"Programa"}
          route={"/home/programs"}
        />
        <div className="md:hidden">
          <button onClick={handleMenu}>
            <ItemNavBar Icon={PlusIcon} title={"."} route={"#"} />
          </button>
        </div>
        <div className="hidden md:flex space-x-7 lg:space-x-9">
          <ItemNavBar
            Icon={ClipboardListIcon}
            title={"Talleres"}
            route={"/home/workshops"}
          />
          <ItemNavBar
            Icon={UserIcon}
            title={"Personas"}
            route={"/home/peoples"}
          />
        </div>
      </div>
      <div>
        <Avatar />
      </div>

      {menuActive && (
        <div className="md:hidden absolute w-full h-auto p-5  bg-gradient-to-tr from-neutral-100 to-neutral-100 border-2 border-gray-200 rounded-md top-12 flex flex-col justify-center items-center space-y-4 duration-700 z-10">
          <ItemNavBar
            Icon={ClipboardListIcon}
            title={"Talleres"}
            route={"/home/workshops"}
          />
          <ItemNavBar
            Icon={UserIcon}
            title={"Personas"}
            route={"/home/peoples"}
          />
        </div>
      )}
    </div>
  );
};
