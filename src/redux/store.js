import rootReducer from './rootReducer';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
   reducer: rootReducer,
   middleware: (GetDefaultMiddleware) => {
      return GetDefaultMiddleware({
         serializableCheck: false,
      });
   },
});

export { store };
