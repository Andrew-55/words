import React from "react";
import styled from "styled-components";

import { TYPOGRAPHY } from "@/styles";

export const Footer = () => {
  return (
    <Root>
      <span>{new Date().getFullYear()} © Все права защищены.</span>
    </Root>
  );
};

const Root = styled.footer`
  ${TYPOGRAPHY.DM_Sans_Regular_16px}
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
`;
