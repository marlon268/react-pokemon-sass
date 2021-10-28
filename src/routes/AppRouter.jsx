import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
   BrowserRouter as BRouter,
   Switch,
   Route,
   Link,
} from 'react-router-dom';

import { useGetPokemons } from '../hooks/useGetPokemons';
import { Home } from '../pages/Home';
import { pokeGetStore } from '../redux/actions/poke';

export const AppRouter = () => {
   const dispatch = useDispatch();

   const { pokemonInfo = [] } = useGetPokemons();

   if (pokemonInfo.length > 0) {
      dispatch(pokeGetStore(pokemonInfo));
   }

   return (
      <>
         <BRouter>
            <Switch>
               <Route exact path="/" component={Home} />
            </Switch>
         </BRouter>
      </>
   );
};
