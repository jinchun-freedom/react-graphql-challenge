// ** Toolkit imports
import { configureStore } from "@reduxjs/toolkit";

// ** Reducers
import launche from "./launche";

export const store = configureStore({
  reducer: {
    launche,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
