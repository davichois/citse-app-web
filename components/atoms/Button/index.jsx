import { ButtonFormStyled, ButtonStyled } from "./ButtonStyled";

export const Button = ({ children, variant = "filled", origin = "normal" }) => {
  return (
    <>
      {origin == "normal" && (
        <ButtonStyled {...{ variant }}>{children}</ButtonStyled>
      )}
      {origin == "form" && (
        <ButtonFormStyled {...{ variant }}>{children}</ButtonFormStyled>
      )}
    </>
  );
};
