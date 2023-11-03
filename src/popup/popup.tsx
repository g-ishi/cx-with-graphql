import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from '@apollo/client';

import './popup.css';
import App from './App';

const client = new ApolloClient({
  uri: xxx, // graphql url
  cache: new InMemoryCache(),
});

// React 18の新しいルートAPIを使用します。
// reactをマウントする要素は自分で作成しないとwarningが出でるので、自前で作成します。
const container = document.createElement('div');
document.body.appendChild(container);
const root = ReactDOM.createRoot(container);

// ルートに対してコンポーネントをレンダーします。
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
