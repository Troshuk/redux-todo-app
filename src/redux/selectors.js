import { createSelector } from "@reduxjs/toolkit";
import { statusFilters } from "./constants";

export const selectTasks = state => state.tasks.items;
export const selectIsLoading = state => state.tasks.isLoading;
export const selectError = state => state.tasks.error;

export const selectStatusFilter = state => state.filters.status;

export const selectVisibleTasks = createSelector(
  [selectTasks, selectStatusFilter],
  (tasks, statusFilter) => {
    switch (statusFilter) {
      case statusFilters.active:
        return tasks.filter(({ completed }) => !completed);

      case statusFilters.completed:
        return tasks.filter(({ completed }) => completed);

      default:
        return tasks;
    }
  }
);

export const selectTaskCount = createSelector([selectTasks], tasks =>
  tasks.reduce(
    (count, task) => {
      if (task.completed) {
        count.completed += 1;
      } else {
        count.active += 1;
      }

      return count;
    },
    { active: 0, completed: 0 }
  )
);
