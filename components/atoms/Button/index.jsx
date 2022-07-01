import { ButtonStyled } from "./ButtonStyled";

export const Button = ({ children, variant = "filled" }) => {
  return (
    <>
      <ButtonStyled {...{ variant }}>{children}</ButtonStyled>
    </>
  );
};
