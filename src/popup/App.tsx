import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { GET_USERS } from '../queries/queries';

function App() {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  console.log('response from graphql server', data);
  console.log(data);
  return <div>Hello, World!{data.users[0].id}</div>;
}

export default App;
