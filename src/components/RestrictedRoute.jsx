import { Navigate } from "react-router-dom";

import { useGetUserQuery } from "store/auth/operations";

/**
 * Redtricted routes are the ones that are not allowed to use when authenticated
 * Redirect to specified route if already authorized
 */
export const RestrictedRoute = ({ component: Component, redirectTo = "/" }) => {
  const { data } = useGetUserQuery();

  return data ? <Navigate replace to={redirectTo} /> : Component;
};
