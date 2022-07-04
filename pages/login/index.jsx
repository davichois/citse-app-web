import { useState } from "react";
import { Button } from "../../components/atoms";
import { Logo, Input, Typography } from "../../contents";

const LoginPage = () => {
  const [indentificacion, setIndentificacion] = useState("");
  const [contraseña, setContraseña] = useState("");

  const submitForm = () => {
    console.log(indentificacion, contraseña);
  };

  return (
    <>
      <div className="fixed">
        <Logo variant="secandary">CITSE</Logo>
      </div>

      <div className="flex flex-col items-center min-h-screen h-auto w-full justify-center gap-5 fixed">
        <Typography
          text={"INICIAR SESIÓN"}
          fontSize={"24px"}
          fontWeight={500}
          variant={"primary"}
        />

        <form
          className="flex flex-col items-center w-full justify-center gap-5"
          onSubmit={(e) => {
            e.preventDefault();
            submitForm();
          }}
        >
          <Input
            placeholder=""
            value={indentificacion}
            onChange={setIndentificacion}
          />

          <Input
            placeholder=""
            type="password"
            value={contraseña}
            onChange={setContraseña}
          />

          <Button variant="filled" type="submit">
           <Typography text={"Iniciar Sesión"} fontSize={"14px"} fontWeight={"400"}/>
          </Button>
        </form>

        <div className="flex flex-col items-center">
          <Typography
            text={"¿No tienes una cuenta?"}
            fontSize={"12px"}
            fontWeight={300}
            variant={"secandary"}
          />
          <Typography
            text={"Comunicate con el encargado"}
            fontSize={"14px"}
            fontWeight={400}
            variant={"tertiary"}
          />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
