import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { tasksReducer } from "./tasksSlice";

axios.defaults.baseURL = "https://65ab32c3fcd1c9dcffc62bda.mockapi.io/";

export const fetchTasks = createAsyncThunk(
  tasksReducer.name + "/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("tasks");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addTask = createAsyncThunk(
  tasksReducer.name + "/addTask",
  async (text, thunkAPI) => {
    try {
      const response = await axios.post("tasks", { text, completed: false });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteTask = createAsyncThunk(
  tasksReducer.name + "/deleteTask",
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`tasks/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const toggleCompleted = createAsyncThunk(
  tasksReducer.name + "/toggleCompleted",
  async ({ id, completed }, thunkAPI) => {
    try {
      const response = await axios.put(`tasks/${id}`, {
        completed: !completed,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
