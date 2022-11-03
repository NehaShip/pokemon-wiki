import React from 'react';
import { ApolloClient } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { Pokemonslist } from './Pokemon.js';
import './App.css';

function App() {
  const client = new ApolloClient({
    uri: 'https://graphql-pokeapi.vercel.app/'
  });

  return (
    <ApolloProvider client={client}>
      <Pokemonslist />
    </ApolloProvider>
  );
}

export default App;