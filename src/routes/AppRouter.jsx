import React from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as BRouter, Switch, Route } from 'react-router-dom';
import { Header } from '../components/Header';
import { Nav } from '../components/Nav';

import { useGetPokemons } from '../hooks/useGetPokemons';
import { Home } from '../pages/Home';
import { pokeGetStore } from '../redux/actions/poke';

export const AppRouter = () => {
   const dispatch = useDispatch();

   const { pokemonInfo = [] } = useGetPokemons();

   if (pokemonInfo.length > 0) {
      dispatch(pokeGetStore(pokemonInfo));
   }

   if (pokemonInfo.length <= 0) {
      return <h1>Cargando...</h1>;
   }

   return (
      <>
         <BRouter>
            <div className="container">
               <Nav />
               <Header />
               <Switch>
                  <Route exact path="/" component={Home} />
               </Switch>
            </div>
         </BRouter>
      </>
   );
};
