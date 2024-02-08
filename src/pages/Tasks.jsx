import { TasksBar, TaskForm, TaskList, Layout } from "components";

import { useGetTasksQuery } from "store/tasks/operations";

export default function Tasks() {
  useGetTasksQuery();

  return (
    <Layout>
      <TasksBar />
      <TaskForm />
      <TaskList />
    </Layout>
  );
}
