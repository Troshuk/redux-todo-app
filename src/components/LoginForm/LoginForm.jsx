import { useLogInMutation } from "store/auth/operations";

import css from "./LoginForm.module.css";

export const LoginForm = () => {
  const [logIn] = useLogInMutation();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;

    logIn({
      email: form.elements.email.value,
      password: form.elements.password.value,
    })
      .unwrap()
      .then(() => form.reset())
      .catch(() => {});
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Email
        <input type="email" name="email" defaultValue="redux@gmail.com" />
      </label>
      <label className={css.label}>
        Password
        <input type="password" name="password" defaultValue="Qwerty1" />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
};
