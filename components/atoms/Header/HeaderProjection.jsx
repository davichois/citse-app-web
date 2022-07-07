import { PencilAltIcon } from "@heroicons/react/outline";

import { ItemActionCard } from "../../../components";

export const HeaderProjection = ({ proyection, origin }) => {

    
  return (
    <>
      <div className="space-y-3 pt-5 lg:max-w-xl">
        <h3 className="font-normal text-lg md:text-lg lg:text-xl text-green-900">
          Proyecto {proyection.nombre}
        </h3>
        <p className="font-light capitalize text-xs md:text-base lg:text-sm">
          {proyection.descripcion}.
        </p>
        <p className="font-extralight capitalize text-xs md:text-base lg:text-sm">
          Objetivo : {proyection.objetivo}.
        </p>
        <div className="lg:w-fit pt-5">
          <ItemActionCard Icon={PencilAltIcon} title="Editar"/>
        </div>
      </div>
    </>
  );
};
