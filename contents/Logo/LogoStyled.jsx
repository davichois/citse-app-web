import tw, { css } from "twin.macro";
import styled from "styled-components";

export const LogoStyled = styled.text(({ variant }) => [
  tw`px-2 py-1 h-12 border-2 border-yellow-500 rounded-sm font-normal`,
  variant == "primary" ? tw`text-yellow-500` : tw`text-yellow-500`,
]);
