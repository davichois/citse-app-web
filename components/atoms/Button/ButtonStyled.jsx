import tw, { styled, css } from "twin.macro";

export const ButtonStyled = styled.button(({ variant }) => [
  tw`box-border h-auto py-2 w-full max-w-xs rounded-sm uppercase`,

  variant == "filled" && tw`bg-yellow-500 text-green-900 border-green-900 border-2`,

  variant == "underline" &&
    tw`bg-transparent text-green-900 border-2 border-green-900`,

  variant == "ghost" && tw`bg-transparent text-yellow-500`,
]);

export const ButtonFormStyled = styled.button(({ variant }) => [
  tw`box-border h-auto py-2 w-full rounded-sm uppercase`,

  variant == "filled" && tw`bg-yellow-500 text-green-900 border-green-900 border-2`,

  variant == "underline" &&
    tw`bg-transparent text-green-900 border-2 border-green-900`,

  variant == "ghost" && tw`bg-transparent text-yellow-500`,
]);
