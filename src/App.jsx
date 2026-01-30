import { useState, useEffect } from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import PokemonList from "./components/PokemonList/PokemonList";
import NavBar from "./components/NavBar/NavBar";
import PokemonDetails from "./components/PokemonDetails/PokemonDetails";
import PokemonForm from "./components/PokemonForm/PokemonForm";
import * as pokemonService from "./services/pokemonService";
// import {index, show} from "./services/pokemonService"

const initialState = [
  { _id: 1, name: "bulbasaur", weight: 69, height: 7 },
  { _id: 2, name: "ivysaur", weight: 130, height: 10 },
  { _id: 3, name: "venusaur", weight: 1000, height: 20 },
  { _id: 4, name: "charmander", weight: 85, height: 6 },
  { _id: 5, name: "charmeleon", weight: 190, height: 11 },
];

function App() {
  const [pokemon, setPokemon] = useState(initialState);

  const addPokemon = (newPokemonData) => {
    newPokemonData._id = pokemon.length + 1;
    setPokemon([...pokemon, newPokemonData]);
  };

  /* 
    useEffect - used to run side effects
    runs under 3 condition
    1. Every time the component render
      useEffect(()=> ...doesSomething)
    2. Only once when the component initial render 
      useEffect(()=> ...doesSomething, [])
    3. Run on initial render and when dependency array changes
      useEffect(()=> ...doesSomthing, [pokemon]) 
  */

  useEffect(() => {
    const fetchData = async () => {
      // get back all the pokemon from the db
      const allPokemon = await pokemonService.index();

      // set those pokemon into state
      setPokemon(allPokemon.results);
      //Optional we could handle errors here with an error on screen
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>Pokemon</h1>
      <NavBar />
      <Routes>
        <Route path="/" element={<h2>Home Page</h2>} />
        <Route path="/pokemon" element={<PokemonList pokemon={pokemon} />} />
        <Route
          path="/pokemon/new"
          element={<PokemonForm addPokemon={addPokemon} />}
        />
        <Route
          path="/pokemon/:pokemonId"
          element={<PokemonDetails pokemon={pokemon} />}
        />
        <Route path="*" element={<h2>Whoops, nothing here!</h2>} />
      </Routes>
    </>
  );
}

export default App;
