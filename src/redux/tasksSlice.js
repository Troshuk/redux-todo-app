import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const tasksInitialState = [
  { id: 0, text: "Learn HTML and CSS", completed: true },
  { id: 1, text: "Get good at JavaScript", completed: true },
  { id: 2, text: "Master React", completed: false },
  { id: 3, text: "Discover Redux", completed: false },
  { id: 4, text: "Build amazing apps", completed: false },
];

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: tasksInitialState,
  reducers: {
    addTask: {
      // [...tasks, payload]
      reducer(tasks, { payload }) {
        tasks.push(payload);
      },
      prepare: text => ({
        payload: {
          id: nanoid(),
          completed: false,
          text,
        },
      }),
    },
    // tasks.filter(({ id }) => id !== payload)
    deleteTask(tasks, { payload }) {
      const index = tasks.findIndex(({ id }) => id === payload);
      tasks.splice(index, 1);
    },
    // tasks.map(task => task.id !== payload ? task : { ...task, completed: !task.completed })
    toggleCompleted(tasks, { payload }) {
      for (const task of tasks) {
        if (task.id === payload) {
          task.completed = !task.completed;
        }
      }
    },
  },
});

export const { addTask, deleteTask, toggleCompleted } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
