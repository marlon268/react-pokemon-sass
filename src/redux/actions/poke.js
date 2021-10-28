import { types } from '../types/types';

export const pokeGetStore = (event) => ({
   type: types.pokeGetStore,
   payload: event,
});
