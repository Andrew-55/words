import React, { ButtonHTMLAttributes, FC, useState } from "react";
import styled, { css } from "styled-components";

import { COLORS, TYPOGRAPHY } from "@/styles";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  id: string;
  text: string;
  isActive: boolean;
  onClickButton: (id: string) => void;
  isDisabled?: boolean;
}

export const ButtonWords: FC<Props> = ({
  className,
  text,
  id,
  isActive,
  onClickButton,
  ...props
}) => {
  const handleClick = () => {
    onClickButton(id);
  };

  return (
    <Root
      className={className}
      $isActive={isActive}
      onClick={handleClick}
      {...props}
    >
      {text}
    </Root>
  );
};

const Root = styled.button<{
  $isDisabled?: boolean;
  $isActive: boolean;
}>`
  ${TYPOGRAPHY.THICCCBOI_Bold_24px};
  box-shadow: 0px 5px 18px ${COLORS.btn_box_shadow};
  letter-spacing: 2px;
  color: ${COLORS.lightgrey};
  padding: 8px 8px;
  border-radius: 4px;
  width: 250px;
  height: 90px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  border: 2px solid ${COLORS.grey};
  &:hover,
  &:focus {
    color: ${COLORS.white_smoke};
    border: 2px solid ${COLORS.white_smoke};
  }

  ${({ $isActive }) =>
    $isActive &&
    css`
      border: 2px solid ${COLORS.green};
      &:hover,
      &:focus {
        border: 2px solid ${COLORS.green};
      }
    `}
`;
