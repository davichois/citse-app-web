import Head from "next/head";

export const DefaultLayout = ({ children, title }) => {
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
      <main className="overflow-hidden min-h-screen h-screen base w-full p-5 md:p-8 bg-gradient-to-br from-neutral-100 to-neutral-100">
        {children}
      </main>
    </>
  );
};
