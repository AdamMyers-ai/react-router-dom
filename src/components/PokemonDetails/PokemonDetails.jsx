// src/components/PokemonDetails/PokemonDetails.jsx

import { useParams } from "react-router";
import { useState, useEffect } from "react";
import * as pokemonService from "../../services/pokemonService";

const PokemonDetails = (props) => {
  // Always verify that any props are being passed correctly!
  console.log(props);

  const [pokemon, setPokemon] = useState();
  const { pokemonId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      // get back one pokemon from the db
      const allPokemon = await pokemonService.show(pokemonId);
      console.log(allPokemon);

      // set those pokemon into state
      setPokemon(allPokemon);
      //Optional we could handle errors here with an error on screen
    };
    fetchData();
  }, [pokemonId]);

  if (!pokemon) {
    return (
      <>
        <h1>Loading.....</h1>
      </>
    );
  }

  return (
    <>
      <h2>Pokemon Details</h2>
      <dl>
        <dt>Weight:</dt>
        <dd>{pokemon.weight}</dd>
        <dt>Height:</dt>
        <dd>{pokemon.height}</dd>
        <dt>Image: </dt>
        <dd>
          <img src={pokemon.sprites.front_shiny} alt={pokemon.name} />
        </dd>
      </dl>
    </>
  );
};

export default PokemonDetails;
