import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';

import './App.css';
import client from './apollo/client';
import Counter from './containers/Counter';

function App() {
  return (
    <ApolloProvider client={client}>
      {/* <div className="App">
        <header className="App-header">
            Learn React
        </header>
      </div> */}
      <Counter />
    </ApolloProvider>
  );
}

export default App;
