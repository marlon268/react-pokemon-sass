import React from 'react';
import { Provider } from 'react-redux';

import { AppRouter } from './routes/AppRouter';
import { store } from './redux/store/store';

export const PokeApp = () => {
   return (
      <Provider store={store}>
         <AppRouter />
      </Provider>
   );
};
