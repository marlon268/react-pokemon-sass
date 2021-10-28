import { types } from '../types/types';

const initialState = {
   pokemons: [],
};

export const pokeReducer = (state = initialState, action) => {
   switch (action.type) {
      case types.pokeGetStore:
         return {
            ...state,
            pokemons: action.payload,
         };

      default:
         return state;
   }
};
