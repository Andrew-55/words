import React, { FC, ReactNode, useEffect } from "react";
import styled from "styled-components";

import { SvgClose } from "@/assets";
import { COLORS } from "@/styles";
import { Z_INDEX } from "@/styles/constants";
import { ButtonIcon } from "@/ui";
import { useOnClickOutside } from "@/utils";

type Props = {
  children: ReactNode | ReactNode[];
  onActiveModelWindow: () => void;
};

export const ModalWindow: FC<Props> = ({ children, onActiveModelWindow }) => {
  const ref = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscapePress = (event: KeyboardEvent) => {
      if (event.code === "Escape") {
        onActiveModelWindow();
      }
    };
    document.body.addEventListener("keydown", handleEscapePress);
    return () =>
      document.body.removeEventListener("keydown", handleEscapePress);
  });

  useOnClickOutside(ref, onActiveModelWindow);

  return (
    <Root>
      <ModalBlock ref={ref}>
        <StyledButtonIcon icon={<SvgClose />} onClick={onActiveModelWindow} />
        {children}
      </ModalBlock>
    </Root>
  );
};

const Root = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.black_shadow};
  z-index: ${Z_INDEX.modalWindow};
`;

const StyledButtonIcon = styled(ButtonIcon)`
  position: absolute;
  right: 10px;
  top: 10px;
  border-radius: 50%;
  &:hover {
    background-color: ${COLORS.grey};
  }
  &:active {
    background-color: ${COLORS.lightgrey};
  }
`;

const ModalBlock = styled.div`
  position: relative;
  width: 60%;
  min-width: 500px;
  padding: 50px;
  border-radius: 5px;
  background-color: ${COLORS.zambezi};
`;
