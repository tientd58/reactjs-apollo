import {gql} from 'apollo-boost';
import { GET_COUNTER } from './queries';

export const UPDATE_COUNTER = gql`
  mutation updateCounter($offset: Number!) {
    updateCounter(offset: $offset) @client
  }
`;

export const CounterMutation = {
  updateCounter: (_, variables, { cache }) => {
    const data = cache.readQuery({ query: GET_COUNTER });
    cache.writeData({ data: { counter: data.counter + variables.offset } });
    return null;
  },
};