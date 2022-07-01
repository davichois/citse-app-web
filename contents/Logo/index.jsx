import { LogoStyled } from "./LogoStyled";

export const Logo = ({ children, variant = "primary" }) => {
  return (
    <>
      <LogoStyled {...{ variant }}>{children}</LogoStyled>
    </>
  );
};
