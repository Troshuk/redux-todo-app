import { Navigation, UserMenu, AuthNav } from "components";

import { useGetUserQuery } from "store/auth/operations";

import css from "./AppBar.module.css";

export const AppBar = () => {
  const { data } = useGetUserQuery();

  return (
    <header className={css.header}>
      <Navigation />
      {data ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
