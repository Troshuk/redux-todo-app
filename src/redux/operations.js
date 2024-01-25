import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { tasksSlice } from "./tasksSlice";

axios.defaults.baseURL = "https://65ab32c3fcd1c9dcffc62bda.mockapi.io/";
const TASKS_ENDPOINT = "tasks";

const getTastTypePrefix = name => `${tasksSlice.name}/${name}`;

export const fetchTasks = createAsyncThunk(
  getTastTypePrefix("fetchAll"),
  async (_, { rejectWithValue }) => {
    try {
      return (await axios.get(TASKS_ENDPOINT)).data;
    } catch ({ message }) {
      return rejectWithValue(message);
    }
  }
);

export const addTask = createAsyncThunk(
  getTastTypePrefix("addTask"),
  async text =>
    (await axios.post(TASKS_ENDPOINT, { text, completed: false })).data
);

export const deleteTask = createAsyncThunk(
  getTastTypePrefix("deleteTask"),
  async id => (await axios.delete(`${TASKS_ENDPOINT}/${id}`)).data
);

export const toggleCompleted = createAsyncThunk(
  getTastTypePrefix("toggleCompleted"),
  async ({ id, completed }) =>
    (await axios.put(`${TASKS_ENDPOINT}/${id}`, { completed: !completed })).data
);
