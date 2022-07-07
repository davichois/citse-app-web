import {
  InputCheckBoxStyled,
  InputSelectStyled,
  InputStyled,
  InputStyledForm,
} from "./InputStyled";

export const Input = ({
  origin = "normal",
  placeholder = "placeholder",
  type = "text",
  onChange,
  value,
  children,
}) => {
  return (
    <>
      {origin == "normal" && (
        <InputStyled
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      )}
      {origin == "checkbox" && (
        <InputCheckBoxStyled
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      )}
      {origin == "select" && (
        <InputSelectStyled
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        >
          {children}
        </InputSelectStyled>
      )}
      {origin == "form" && (
        <InputStyledForm
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      )}
    </>
  );
};
