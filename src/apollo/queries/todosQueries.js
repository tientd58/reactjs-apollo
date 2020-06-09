import {gql} from 'apollo-boost';

export const TODOS_QUERY = gql`
query GetCounterValue {
  todos @client {
    id
    completed
    text
  } 
}
`;