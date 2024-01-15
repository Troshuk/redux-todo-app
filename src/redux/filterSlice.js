import { statusFilters } from "./constants";
import { createSlice } from "@reduxjs/toolkit";

const filterInitialState = {
  status: statusFilters.all,
};

const filterSlice = createSlice({
  name: "filter",
  initialState: filterInitialState,
  reducers: {
    // ({...filter, status: payload })
    setStatusFilter(filter, { payload }) {
      filter.status = payload;
    },
  },
});

export const { setStatusFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
