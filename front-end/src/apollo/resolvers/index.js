import { gql } from 'apollo-boost';
import { CounterMutation } from '../../graphql/Counter/mutations';

export const typeDefs = gql`
  extend type Query {
    count: Number!,
  }
`;

export const resolvers = {
  Mutation: {
    ...CounterMutation,
  }
};