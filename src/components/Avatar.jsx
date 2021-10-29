import React from 'react';

export const Avatar = ({ pokemon }) => {
   return (
      <div className="avatar">
         <div className="avatar-contain">
            <img
               className="avatar-img"
               src={pokemon.sprites.other.dream_world.front_default}
               alt={pokemon.name}
            />
            <p>{pokemon.name}</p>
         </div>
      </div>
   );
};
