import { gql } from '@apollo/client';

export const GET_USERS = gql`
  query GetUsers {
    users(order_by: { created_at: desc }) {
      created_at
      group_id
      id
      name
    }
  }
`;
