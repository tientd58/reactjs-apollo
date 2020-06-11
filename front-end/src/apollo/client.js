import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';

import initialState from './combineState';
import { resolvers, typeDefs } from './resolvers';

const cache = new InMemoryCache();

const client = new ApolloClient({
  uri: 'https://kane/graphql',
  cache,
  typeDefs,
  resolvers
});

cache.writeData({
  data: initialState
});

export default client;
