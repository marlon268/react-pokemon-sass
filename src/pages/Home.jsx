import React from 'react';
import { useSelector } from 'react-redux';

export const Home = () => {
   const { pokemons } = useSelector((state) => state.poke);

   return (
      <main className="main">
         {pokemons.map((pokemon, i) => {
            return (
               <article className="main-article" key={i}>
                  <img
                     className="main-article_img"
                     src={pokemon.sprites.other.dream_world.front_default}
                     alt={pokemon.name}
                  />
               </article>
            );
         })}
      </main>
   );
};
