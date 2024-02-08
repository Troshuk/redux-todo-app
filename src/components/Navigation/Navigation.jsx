import { NavLink } from "react-router-dom";

import { useGetUserQuery } from "store/auth/operations";

import css from "./Navigation.module.css";

export const Navigation = () => {
  const { data } = useGetUserQuery();

  return (
    <nav>
      <NavLink className={css.link} to="/">
        Home
      </NavLink>
      {data && (
        <NavLink className={css.link} to="/tasks">
          Tasks
        </NavLink>
      )}
    </nav>
  );
};
