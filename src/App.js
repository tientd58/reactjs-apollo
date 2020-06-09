import React, { Component } from "react";
import { ApolloProvider } from '@apollo/react-hooks';

import './App.css';
import client from './apollo/client';
import Counter from './containers/Counter';

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div>
          <h1>My React App!</h1>
        </div>
        <Counter />
      </ApolloProvider>
    );
  }
}

export default App;
