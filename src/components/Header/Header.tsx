import React from "react";
import styled from "styled-components";

import { COLORS, TYPOGRAPHY } from "@/styles";

export const Header = () => {
  return (
    <Root>
      <Logo>WORDS</Logo>
    </Root>
  );
};

const Root = styled.header`
  width: 100%;
  position: relative;
  width: 100%;
  padding: 24px 86px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: thick double ${COLORS.white_smoke};
`;

const Logo = styled.span`
  ${TYPOGRAPHY.DM_Sans_Bold_54px}
  text-transform: uppercase;
`;
