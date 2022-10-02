import { gql } from "@apollo/client";

export const LOAD_USERS = gql`
query{
    posts{
      title,
      datePublished
      content{
        html
      }
    }
  }
`
