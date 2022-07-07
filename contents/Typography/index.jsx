import { TypographyStyled } from "./TypographyStyled";

export const Typography = ({
  text = "",
  variant = "primary",
  fontSize = "12px",
  fontWeight = "100",
}) => {
  return (
    <>
      <TypographyStyled {...{ variant, fontSize, fontWeight }}>
        {text}
      </TypographyStyled>
    </>
  );
};
