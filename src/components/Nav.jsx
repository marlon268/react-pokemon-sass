import React from 'react';
import { BsHouseDoor, BsHeart } from 'react-icons/bs';

export const Nav = () => {
   return (
      <nav className="nav">
         <a className="nav-icon__home" href="#">
            <BsHouseDoor />
         </a>
         <h1 className="nav-title">PokeGram</h1>
         <a className="nav-icon__home" href="#">
            <BsHeart />
         </a>
      </nav>
   );
};
