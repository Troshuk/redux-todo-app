import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "https://65ab32c3fcd1c9dcffc62bda.mockapi.io";
const TASKS_ENDPOINT = "tasks";

export const tasksApi = createApi({
  reducerPath: "tasksApi",
  tagTypes: ["Tasks"],
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/${TASKS_ENDPOINT}`,
  }),
  endpoints: builder => ({
    getTasks: builder.query({
      query: () => "",
      providesTags: ["Tasks"],
    }),
    addTask: builder.mutation({
      query: text => ({
        method: "POST",
        body: { text, completed: false },
      }),
      invalidatesTags: ["Tasks"],
    }),
    deleteTask: builder.mutation({
      query: id => ({
        url: id,
        method: "DELETE",
      }),
      invalidatesTags: ["Tasks"],
    }),
    toggleCompleted: builder.mutation({
      query: ({ id, completed }) => ({
        url: id,
        method: "PUT",
        body: { completed: !completed },
      }),
      invalidatesTags: ["Tasks"],
    }),
  }),
});

export const {
  useGetTasksQuery,
  useAddTaskMutation,
  useDeleteTaskMutation,
  useToggleCompletedMutation,
} = tasksApi;
