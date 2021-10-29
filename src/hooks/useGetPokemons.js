import { useEffect, useState } from 'react';
import axios from 'axios';

export const useGetPokemons = () => {
   const [pokemons, setPokemons] = useState([]);
   const [pokemonInfo, setPokemonInfo] = useState([]);

   const getPokemons = (pokemons = []) => {
      const pokemonUrl = pokemons.map((pokemon) => pokemon.url);

      const pokemonAxios = pokemonUrl.map((pokemon) => {
         return axios.get(pokemon);
      });

      return pokemonAxios;
   };

   useEffect(() => {
      axios
         .get('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')
         .then((response) => {
            setPokemons([...pokemons, ...response.data.results]);
         })
         .catch((err) => {
            console.log(err);
         });
   }, []);

   useEffect(() => {
      Promise.all(getPokemons(pokemons)).then((results) => {
         const pokemonIn = results.map((result) => result.data);
         setPokemonInfo([...pokemonInfo, ...pokemonIn]);
      });
   }, [pokemons]);

   if (pokemonInfo.length <= 0) {
      return {};
   }
   return { pokemonInfo };
};
