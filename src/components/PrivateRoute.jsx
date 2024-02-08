import { Navigate } from "react-router-dom";

import { useGetUserQuery } from "store/auth/operations";

/**
 * Private routes are the ones that require authentication to use
 * Redirect to specified route if unauthorized
 */
export const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
  const { data } = useGetUserQuery();

  return !data ? <Navigate replace to={redirectTo} /> : Component;
};
