import { InputStyled } from "./InputStyled";

export const Input = ({
  placeholder = "name",
  type = "text",
  onChange,
  value,
}) => {
  return (
    <>
      <InputStyled
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  );
};
