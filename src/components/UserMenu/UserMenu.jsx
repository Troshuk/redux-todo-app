import { useGetUserQuery, useLogOutMutation } from "store/auth/operations";

import css from "./UserMenu.module.css";

export const UserMenu = () => {
  const [logOut] = useLogOutMutation();

  const { data: user } = useGetUserQuery();

  return (
    <div className={css.wrapper}>
      {user && (
        <p className={css.username}>
          Welcome, {user.name} ({user.email})
        </p>
      )}
      <button type="button" onClick={() => logOut()}>
        Logout
      </button>
    </div>
  );
};
