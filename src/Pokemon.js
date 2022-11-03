import React from 'react';
import {gql} from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

const GET_POKEMONS = gql`
  query pokemons($first: Int!) {
    pokemons(first: $first) {
      name
      image
      attacks
    }
  }`

function Pokemon({ pokemon }) {
  return (
    <div className="pokemon">
      <div className="pokemon__name">
        <p>{pokemon.name}</p>
      </div>
      <div className="pokemon__image">
        <img src={pokemon.image} alt={pokemon.name} />
      </div>
      <div className="pokemon__attacks">
        <p>{pokemon.attacks}</p>
      </div>
    </div>
  )
}

export function Pokemonslist() {
  const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
    variables: { first: 10 },
  });

  return (
    <div className="list">
      {pokemons && pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
    </div>
  )
}