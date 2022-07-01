import tw, { styled, css } from "twin.macro";

export const ButtonStyled = styled.button(({ variant }) => [
  tw`px-5  box-border h-12 w-full max-w-xs rounded-sm text-sm font-normal uppercase`,

  variant == "filled" && tw`bg-yellow-500 text-green-900 border-green-900 border-2`,

  variant == "underline" &&
    tw`bg-transparent text-green-900 border-2 border-green-900`,

  variant == "ghost" && tw`bg-transparent text-yellow-500`,
]);
