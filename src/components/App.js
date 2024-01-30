import { ToastContainer } from "react-toastify";

import { Layout } from "components/Layout/Layout";
import { AppBar } from "components/AppBar/AppBar";
import { TaskForm } from "components/TaskForm/TaskForm";
import { TaskList } from "components/TaskList/TaskList";

import { useGetTasksQuery } from "store/operations";
import { useEffect } from "react";
import { notify } from "notify";

export const App = () => {
  const { error } = useGetTasksQuery();

  useEffect(() => {
    if (error) notify(`Tasks list error: ${error.data}`, "error");
  }, [error]);

  return (
    <Layout>
      <AppBar />
      <TaskForm />
      <ToastContainer />
      <TaskList />
    </Layout>
  );
};
