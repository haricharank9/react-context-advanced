import { gql } from "@apollo/client";

// Define your GraphQL query
export const EXAMPLE_GRAPHQL_QUERY = gql`
 
 query getItems{
  pokemon_v2_item
  {
    name,
    cost
  }
  }
`;