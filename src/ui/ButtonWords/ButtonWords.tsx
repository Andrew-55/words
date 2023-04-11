import React, { ButtonHTMLAttributes, FC, useState } from "react";
import styled, { css } from "styled-components";

import { COLORS, TYPOGRAPHY } from "@/styles";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  id: string;
  text: string;
  onClickButton: (id: string) => void;
  isDisabled?: boolean;
}

export const ButtonWords: FC<Props> = ({
  className,
  text,
  id,
  onClickButton,
  ...props
}) => {
  const [isPressed, setIsPressed] = useState(false);

  const handleClick = () => {
    if (!isPressed) {
      onClickButton(id);
    }
    if (isPressed) {
      onClickButton("");
    }
    setIsPressed((prev) => !prev);
  };

  return (
    <Root
      className={className}
      $isPressed={isPressed}
      onClick={handleClick}
      {...props}
    >
      {text}
    </Root>
  );
};

const Root = styled.button<{
  $isDisabled?: boolean;
  $isPressed: boolean;
}>`
  ${TYPOGRAPHY.THICCCBOI_Bold_24px};
  box-shadow: 0px 5px 18px ${COLORS.btn_box_shadow};
  letter-spacing: 2px;
  color: ${COLORS.lightgrey};
  padding: 20px 20px;
  border-radius: 4px;
  width: 250px;
  height: 100px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  border: 2px solid ${COLORS.grey};
  &:hover,
  &:focus {
    color: ${COLORS.white_smoke};
    border: 2px solid ${COLORS.white_smoke};
  }

  ${({ $isPressed }) =>
    $isPressed &&
    css`
      border: 2px solid ${COLORS.green};
      &:hover,
      &:focus {
        border: 2px solid ${COLORS.green};
      }
    `}
`;
