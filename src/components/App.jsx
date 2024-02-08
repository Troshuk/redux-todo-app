import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { PrivateRoute, AppLayout } from "components";

import { RestrictedRoute } from "./RestrictedRoute";
import { useGetUserQuery } from "store/auth/operations";

const HomePage = lazy(() => import("pages/Home"));
const TasksPage = lazy(() => import("pages/Tasks"));
const LoginPage = lazy(() => import("pages/Login"));
const RegisterPage = lazy(() => import("pages/Register"));

export const App = () => {
  const { isLoading } = useGetUserQuery();

  return (
    !isLoading && (
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<HomePage />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  redirectTo="/tasks"
                  component={<RegisterPage />}
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute
                  redirectTo="/tasks"
                  component={<LoginPage />}
                />
              }
            />
            <Route
              path="/tasks"
              element={
                <PrivateRoute redirectTo="/login" component={<TasksPage />} />
              }
            />
          </Route>
        </Routes>
      </Suspense>
    )
  );
};
