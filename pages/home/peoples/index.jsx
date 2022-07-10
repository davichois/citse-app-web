import Link from "next/link";
import { ItemCreation } from "../../../components";
import { PageGeneralLayout } from "../../../layouts/PageGeneralLayout";
import { getInfoEndPoint } from "../../../utils";

const UsersPage = ({ personas }) => {
  const cabecera = [
    "nombre",
    "apellidos",
    "dni",
    "fecha nacimiento",
    "option",
  ];

  return (
    <>
      <PageGeneralLayout>
        <ItemCreation route={"/home/peoples/creation"} />
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                {cabecera.map((r, i) => (
                  <th key={i} scope="col" className="px-6 py-3">
                    {r}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {personas.map((p) => (
                <tr
                  className="bg-white border-b "
                  key={p.idPersona}
                  onClick={() => {
                    console.log(p.idPersona);
                  }}
                >
                  <td className="px-6 py-4">{p.noPersona}</td>
                  <td className="px-6 py-4">
                    {p.apPaterno} {p.apMaterno}
                  </td>
                  <td className="px-6 py-4">{p.nuIndentificacion}</td>
                  <td className="px-6 py-4">{p.feNacimiento}</td>
                  <td className="px-6 py-4 text-right flex space-x-5">
                    <p className="font-medium text-red-400  hover:underline">
                      {" "}
                      Delete
                    </p>
                    <Link href={"#"}>
                      <a className="font-medium text-blue-600  hover:underline">
                        Edit
                      </a>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </PageGeneralLayout>
    </>
  );
};

export const getServerSideProps = async (ctx) => {
  const data = await getInfoEndPoint({ path: "/maestra/persona/" });

  if (!data) {
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }

  return {
    props: {
      personas: data,
    },
  };
};

export default UsersPage;
