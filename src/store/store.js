import { configureStore } from "@reduxjs/toolkit";

import { filterReducer } from "./reducers";
import { tasksApi } from "./operations";

export const store = configureStore({
  reducer: {
    filterReducer,
    [tasksApi.reducerPath]: tasksApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(tasksApi.middleware),
});
