import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counter/counterSlice";
import { dogsApiSlice } from "../features/dogs/dogsApiSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    [dogsApiSlice.reducerPath]: dogsApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(dogsApiSlice.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
