import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import { filterReducer } from "./filter/reducer";
import { authReducer } from "./auth/slice";
import { taskManagerApi } from "./auth/operations";

export const store = configureStore({
  reducer: {
    filterReducer,
    authReducer: persistReducer(
      {
        key: "auth",
        whitelist: ["token"],
        storage,
      },
      authReducer
    ),
    [taskManagerApi.reducerPath]: taskManagerApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    taskManagerApi.middleware,
  ],
  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);
