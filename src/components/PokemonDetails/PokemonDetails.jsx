// src/components/PokemonDetails/PokemonDetails.jsx

import { useParams } from "react-router";

const PokemonDetails = (props) => {
  // Always verify that any props are being passed correctly!
  console.log(props);

  const { pokemonId } = useParams();
//   console.log("pokemonId:", pokemonId);

  const singlePokemon = props.pokemon.find(
    (poke) => poke._id === Number(pokemonId),
  );
//   console.log("Pokemon Object:", singlePokemon);

  return (
    <>
      <h2>Pokemon Details</h2>
      <dl>
        <dt>Weight:</dt>
        <dd>{singlePokemon.weight}</dd>
        <dt>Height:</dt>
        <dd>{singlePokemon.height}</dd>
      </dl>
    </>
  );
};

export default PokemonDetails;
