import React from 'react';
import { useSelector } from 'react-redux';
import { Avatar } from './Avatar';

export const Header = () => {
   const { pokemons } = useSelector((state) => state.poke);
   console.log(pokemons);

   return (
      <header className="header">
         {pokemons.map((pokemon, i) => {
            return <Avatar key={i} pokemon={pokemon} />;
         })}
      </header>
   );
};
