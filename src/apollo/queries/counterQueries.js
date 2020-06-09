import {gql} from 'apollo-boost';

export const GET_COUNTER = gql` 
 query GetCounterValue {
    counter @client  
 }
`;