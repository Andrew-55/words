import { gql } from "@apollo/client";

export const GET_IRREGULAR_VERBS = gql`
  query {
    getAllVerbs {
      id
      infinitive
      translation
    }
  }
`;
