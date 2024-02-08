import { createSlice } from "@reduxjs/toolkit";

import { statusFilters } from "store/constants";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    status: statusFilters.all,
  },
  reducers: {
    setStatusFilter: (filter, { payload }) => {
      filter.status = payload;
    },
  },
});

export const { setStatusFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
