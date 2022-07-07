import tw, { css , styled} from "twin.macro";

export const TypographyStyled = styled.text(
  ({ variant, fontSize, fontWeight }) => [
    css`
      font-size: ${fontSize};
      font-weight: ${fontWeight};
    `,

    variant == "primary" && tw`text-green-900`,

    variant == "secondary" && tw`text-gray-500`,

    variant == "tertiary" && tw`text-gray-400`,
  ]
);
