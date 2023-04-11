import React, { ButtonHTMLAttributes, FC } from "react";
import styled, { css } from "styled-components";

import { COLORS, TYPOGRAPHY } from "@/styles";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  id?: string;
  text: string;
  isDisabled?: boolean;
}

export const Button: FC<Props> = ({
  isDisabled,
  className,
  text,
  id,
  ...props
}) => {
  return (
    <Root
      disabled={isDisabled}
      className={className}
      $isDisabled={isDisabled}
      {...props}
    >
      {text}
    </Root>
  );
};

const Root = styled.button<{
  $isDisabled?: boolean;
}>`
  ${TYPOGRAPHY.THICCCBOI_Bold_16px};
  box-shadow: 0px 5px 18px ${COLORS.btn_box_shadow};
  letter-spacing: 2px;
  color: ${COLORS.lightgrey};
  padding: 20px 20px;
  border-radius: 4px;
  min-width: 100px;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  border: 2px solid ${COLORS.grey};
  &:hover {
    color: ${COLORS.white_smoke};
    border-color: ${COLORS.white_smoke};
  }

  ${({ $isDisabled }) =>
    $isDisabled &&
    css`
      opacity: 0.6;
      pointer-events: none;
    `}
`;
