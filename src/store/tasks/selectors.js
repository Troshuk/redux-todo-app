import { createSelector } from "@reduxjs/toolkit";

import { statusFilters } from "store/constants";
import { tasksApiSelector } from "store/tasks/operations";
import { statusFilterSelector } from "store/filter/selectors";

export const tasksSelector = createSelector(
  tasksApiSelector,
  ({ data }) => data ?? []
);

export const visibleTasksSelector = createSelector(
  [tasksSelector, statusFilterSelector],
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

export const tasksCountSelector = createSelector([tasksSelector], tasks =>
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
