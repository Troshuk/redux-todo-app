import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { addTask, deleteTask, fetchTasks, toggleCompleted } from "./operations";

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      // Fetch tasks
      .addCase(fetchTasks.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items = payload;
      })

      // Create task
      .addCase(addTask.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(payload);
      })

      // Delete task
      .addCase(deleteTask.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(({ id }) => id !== payload.id);
      })

      // Toggle complited task
      .addCase(toggleCompleted.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(({ id }) => id === payload.id);
        state.items.splice(index, 1, payload);
      })

      // Handle Pending request
      .addMatcher(
        isAnyOf(
          fetchTasks.pending,
          addTask.pending,
          deleteTask.pending,
          toggleCompleted.pending
        ),
        state => {
          state.isLoading = true;
        }
      )

      // Handle Rejected request
      .addMatcher(
        isAnyOf(
          fetchTasks.rejected,
          addTask.rejected,
          deleteTask.rejected,
          toggleCompleted.rejected
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      );
  },
});

export const tasksReducer = tasksSlice.reducer;
