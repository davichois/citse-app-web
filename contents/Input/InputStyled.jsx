import tw, { styled, css } from "twin.macro";

export const InputStyled = styled.input(({ variant }) => [
  tw`p-1 h-9 w-full max-w-xs rounded-sm text-sm font-medium outline-none border-b-2 border-gray-800 bg-transparent focus:border-gray-800`,
]);
