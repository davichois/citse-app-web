import Head from "next/head";
import { Typography } from "../contents";

export const SEOCustom = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title || "CITSE"}</title>
        <meta name="author" content="group hook-up" />
        <meta
          name="descripcion"
          content="Proyecto para asistencia de proyectos realizados por el departamento de mision."
        />
        <meta
          name="keywords"
          content="citse, upeu, hook-up, quinta elena, departamento mision"
        />
      </Head>
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
