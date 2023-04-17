import { gql } from "@apollo/client";

export const GET_IRREGULAR_VERBS_COUPLE = gql`
  query {
    getAllVerbs {
      id
      infinitive
      translation
    }
  }
`;

export const GET_IRREGULAR_VERBS = gql`
  query {
    getAllVerbs {
      id
      infinitive
      past
      pastParticiple
      translation
    }
  }
`;
