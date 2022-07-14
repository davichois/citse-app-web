import Image from "next/image";
import Link from "next/link";

import { Button } from "../components";
import { Logo } from "../contents";
import { SEOCustom } from "../layouts";

const HomePage = () => {
  return (
    <SEOCustom title={"CITSE ⚡️"}>
      <div className="mb-20 flex justify-between items-start">
        <div>
          <Logo>CITSE</Logo>
        </div>
        <Link href={"/login"}>
          <div className="w-40">
            <Button origin="form" variant="underline">
              Iniciar sesion
            </Button>
          </div>
        </Link>
      </div>
      <div className="flex flex-col lg:flex-row justify-around items-center lg:items-start">
        <div className="hidden lg:flex lg:flex-col w-2/5">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-yellow-500">CITSE</h2>
            <h5 className="text-xs text-green-900 uppercase">
              conection in the social environment
            </h5>
          </div>
          <p className="text-base font-extralight text-green-900 mb-10 text-justify">
            Es dirigida por el departamento de mision la cual su finalidad es
            hacer una vinculacion con el medio atravez de servicios
            voluntariados, asi ayudando a personas de bajos recursos economicos.
          </p>
          <Link href={"/login"}>
            <div className="w-52">
              <Button origin="form" variant="underline">
                Iniciar sesion
              </Button>
            </div>
          </Link>
        </div>
        <div>
          <Image
            src={"/img/people.png"}
            width={500}
            height={500}
            objectFit={"contain"}
            alt={"people img"}
          />
        </div>
      </div>
    </SEOCustom>
  );
};

export default HomePage;
