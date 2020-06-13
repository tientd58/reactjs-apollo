import React from 'react';
import { ToastContainer } from "react-toastify";
import { ApolloProvider } from '@apollo/react-hooks';

import './styles/App.scss';
import client from 'apollo/client';
import RouterContainer from 'routers';

function App() {
  return (
    <ApolloProvider client={client}>
      <RouterContainer />
      <ToastContainer />
    </ApolloProvider>
  );
}

export default App;
