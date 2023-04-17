import { useQuery } from "@apollo/client";
import styled from "styled-components";

import { GET_IRREGULAR_VERBS, IrregularVerbsType } from "@/entities";
import { TYPOGRAPHY } from "@/styles";
import { COLORS } from "@/styles/constants";

export const IrregularVersTable = () => {
  const { loading, error, data } =
    useQuery<IrregularVerbsType>(GET_IRREGULAR_VERBS);

  return (
    <Root>
      <TableContainer>
        <table>
          <StyledCaption>
            Таблица неправильных глаголов английского языка
          </StyledCaption>
          <StyledTableHead>
            <tr>
              <TitleColumn>№</TitleColumn>
              <TitleColumn>Infinitive</TitleColumn>
              <TitleColumn>Past</TitleColumn>
              <TitleColumn>Past Participle</TitleColumn>
              <TitleColumn>Translation</TitleColumn>
            </tr>
          </StyledTableHead>
          <tbody>
            {data?.getAllVerbs.map((verb, index) => (
              <StyledLineBody key={verb.id}>
                <Cell>{index + 1}</Cell>
                <Cell>{verb.infinitive}</Cell>
                <Cell>{verb.past}</Cell>
                <Cell>{verb.pastParticiple}</Cell>
                <Cell>{verb.translation}</Cell>
              </StyledLineBody>
            ))}
          </tbody>
        </table>
      </TableContainer>
    </Root>
  );
};

const Root = styled.main`
  width: 100%;
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const TableContainer = styled.div`
  height: 700px;
  overflow-y: auto;
`;

const StyledTableHead = styled.thead`
  position: sticky;
  top: 0;
`;

const StyledLineBody = styled.tr`
  background-color: ${COLORS.eclipse};
  &:nth-child(2n) {
    background-color: ${COLORS.nero};
  }
`;

const StyledCaption = styled.caption`
  ${TYPOGRAPHY.DM_Sans_Bold_34px}
  margin-bottom: 30px;
`;

const TitleColumn = styled.th`
  ${TYPOGRAPHY.THICCCBOI_Bold_28px}
  padding: 10px 20px;
  background-color: ${COLORS.dim_gray};
  text-align: start;
`;

const Cell = styled.td`
  ${TYPOGRAPHY.THICCCBOI_Medium_24px}
  padding: 10px 20px;
`;
