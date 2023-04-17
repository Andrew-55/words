import { useQuery } from "@apollo/client";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";

import { Layout } from "@/components";
import { GET_IRREGULAR_VERBS, IrregularVerbsType } from "@/entities";
import { TYPOGRAPHY } from "@/styles";
import { COLORS, ERROR_MESSAGE } from "@/styles/constants";
import { ButtonWords } from "@/ui";
import { showTime, shuffleArray } from "@/utils/functions/logic-functions";

type VerbType = {
  id: string;
  text: string;
};

export default function VerbsCouple() {
  const { loading, error, data } =
    useQuery<IrregularVerbsType>(GET_IRREGULAR_VERBS);

  const [currentIdEnglish, setCurrentIdEnglish] = useState("");
  const [currentIdRussian, setCurrentIdRussian] = useState("");
  const [countMistake, setCountMistake] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const [verbsEnglishShow, setVerbsEnglishShow] = useState<VerbType[]>();
  const [verbsRussianShow, setVerbsRussianShow] = useState<VerbType[]>();

  useEffect(() => {
    if (!verbsEnglishShow && !verbsRussianShow && data && data.getAllVerbs) {
      const verbsEnglish = data.getAllVerbs.map((verb) => {
        return { id: verb.id, text: verb.infinitive };
      });
      const verbsRussian = data.getAllVerbs.map((verb) => {
        return { id: verb.id, text: verb.translation };
      });
      setVerbsEnglishShow(shuffleArray(verbsEnglish));
      setVerbsRussianShow(shuffleArray(verbsRussian));
    }
  }, [verbsEnglishShow, verbsRussianShow, data, data?.getAllVerbs]);

  useEffect(() => {
    const tick = (num: number) => setSeconds(seconds + num);

    const interval = setInterval(() => tick(1), 1000);

    const cleanup = () => {
      clearInterval(interval);
    };

    if (verbsEnglishShow && verbsEnglishShow.length === 0) {
      cleanup();
    }

    return cleanup;
  });

  const handleClickButtonEnglish = (id: string) => {
    if (currentIdEnglish === id) {
      setCurrentIdEnglish("");
    } else {
      setCurrentIdEnglish(id);
    }
  };

  const handleClickButtonRussian = (id: string) => {
    if (currentIdRussian === id) {
      setCurrentIdRussian("");
    } else {
      setCurrentIdRussian(id);
    }
  };

  useEffect(() => {
    if (!currentIdEnglish || !currentIdRussian) {
      return;
    }

    if (currentIdEnglish === currentIdRussian) {
      const nowEnglishVerbs =
        verbsEnglishShow &&
        verbsEnglishShow.filter((verb) => verb.id !== currentIdEnglish);
      const nowRussianVerbs =
        verbsRussianShow &&
        verbsRussianShow.filter((verb) => verb.id !== currentIdRussian);

      setVerbsEnglishShow(nowEnglishVerbs);
      setVerbsRussianShow(nowRussianVerbs);
      setCurrentIdEnglish("");
      setCurrentIdRussian("");
    }
    if (currentIdEnglish !== currentIdRussian) {
      setCurrentIdEnglish("");
      setCurrentIdRussian("");
      setCountMistake((prev) => prev + 1);
      toast(ERROR_MESSAGE.wrongVerbsCouple, { type: "error" });
    }
  }, [currentIdEnglish, currentIdRussian, verbsEnglishShow, verbsRussianShow]);

  return (
    <>
      <Head>
        <title>Verbs-Couple</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Root>
          <InfoBlock>
            <InfoBlockRight>
              <span>{`Осталось слов: ${verbsEnglishShow?.length || 0}`}</span>
              <span>{`Количество ошибок: ${countMistake}`}</span>
              <span>{`Время прохождения: ${showTime(seconds)}`}</span>
            </InfoBlockRight>
            <StyledLink href="/verbs-table">
              Посмотреть таблицу глаголов
            </StyledLink>
          </InfoBlock>
          <WrapVerbs>
            <WrapButton>
              {verbsEnglishShow &&
                verbsEnglishShow.map((verb) => (
                  <ButtonWords
                    key={verb.id}
                    id={verb.id}
                    text={verb.text}
                    isActive={verb.id === currentIdEnglish}
                    onClickButton={handleClickButtonEnglish}
                  />
                ))}
            </WrapButton>
            <WrapButton>
              {verbsRussianShow &&
                verbsRussianShow.map((verb) => (
                  <ButtonWords
                    key={verb.id}
                    id={verb.id}
                    text={verb.text}
                    isActive={verb.id === currentIdRussian}
                    onClickButton={handleClickButtonRussian}
                  />
                ))}
            </WrapButton>
          </WrapVerbs>
        </Root>
      </Layout>
    </>
  );
}

const Root = styled.main`
  width: 100%;
  position: relative;
  width: 100%;
  padding: 32px 86px;
`;

const StyledLink = styled(Link)`
  &:hover {
    color: ${COLORS.red};
  }
`;

const WrapVerbs = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 50px;
`;

const WrapButton = styled.div`
  display: flex;
  max-height: 700px;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 15px;
  overflow-y: auto;
`;

const InfoBlock = styled.div`
  ${TYPOGRAPHY.THICCCBOI_Medium_20px}
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 50px;
`;

const InfoBlockRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 50px;
`;
