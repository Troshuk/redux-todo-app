import { taskManagerApi } from "store/auth/operations";

const TASKS_ENDPOINT = "tasks";

const getEndpoint = (...subEndpoints) =>
  [TASKS_ENDPOINT, ...subEndpoints].join("/");

const handleGetTasksCacheUpdate =
  (cacheUpdateCallback, shouldWaitForResponse = false) =>
  async (queryParam, { dispatch, queryFulfilled }) => {
    try {
      let data = queryParam;

      if (shouldWaitForResponse) {
        data = (await queryFulfilled).data;
      }

      const patchResult = dispatch(
        tasksApi.util.updateQueryData("getTasks", undefined, tasks =>
          cacheUpdateCallback(tasks, data)
        )
      );

      if (!shouldWaitForResponse) {
        queryFulfilled.catch(patchResult.undo);
      }
    } catch {}
  };

export const tasksApi = taskManagerApi.injectEndpoints({
  providesTags: ["Tasks"],
  endpoints: builder => ({
    getTasks: builder.query({
      query: getEndpoint,
      providesTags: ["Tasks"],
    }),
    addTask: builder.mutation({
      query: text => ({
        url: getEndpoint(),
        method: "POST",
        body: { text, completed: false },
      }),
      onQueryStarted: handleGetTasksCacheUpdate(
        (tasks, task) => [...tasks, task],
        true
      ),
      invalidatesTags: ["Tasks"],
    }),
    deleteTask: builder.mutation({
      query: id => ({
        url: getEndpoint(id),
        method: "DELETE",
      }),
      onQueryStarted: handleGetTasksCacheUpdate((tasks, id) =>
        tasks.filter(task => task.id !== id)
      ),
      invalidatesTags: ["Tasks"],
    }),
    toggleCompleted: builder.mutation({
      query: ({ id, ...task }) => ({
        url: getEndpoint(id),
        method: "PATCH",
        body: task,
      }),
      onQueryStarted: handleGetTasksCacheUpdate((tasks, { id, ...taskData }) =>
        tasks.map(task => (task.id === id ? { ...task, ...taskData } : task))
      ),
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

export const tasksApiSelector = tasksApi.endpoints.getTasks.select();