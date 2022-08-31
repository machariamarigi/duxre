import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import pokemonReducer from "./slices/pokemonSlice";

export let store = configureStore({
  reducer: {
    counter: counterReducer,
    pokemon: pokemonReducer,
  },
});

// Infer rhe `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default function getStore(preloadedState?: RootState) {
  store = configureStore({
    reducer: {
      counter: counterReducer,
      pokemon: pokemonReducer,
    },
    preloadedState,
  });

  return store;
}
