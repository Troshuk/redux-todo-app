import { createSelector } from "@reduxjs/toolkit";

const filterReducerSelector = ({ filterReducer }) => filterReducer;

export const statusFilterSelector = createSelector(
  filterReducerSelector,
  ({ status }) => status
);
