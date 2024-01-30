import { createSelector } from "@reduxjs/toolkit";

import { statusFilters } from "store/constants";
import { tasksApi } from "store/operations";
import { statusFilterSelector } from "store/selectors";

export const tasksSelector = createSelector(
  tasksApi.endpoints.getTasks.select(),
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
