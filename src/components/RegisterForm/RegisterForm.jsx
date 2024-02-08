import { useSignUpMutation } from "store/auth/operations";

import css from "./RegisterForm.module.css";

export const RegisterForm = () => {
  const [signUp] = useSignUpMutation();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;

    signUp({
      name: form.elements.name.value,
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
        Username
        <input type="text" name="name" defaultValue="Denys" />
      </label>
      <label className={css.label}>
        Email
        <input type="email" name="email" defaultValue="redux.1@gmail.com" />
      </label>
      <label className={css.label}>
        Password
        <input type="password" name="password" defaultValue="Qwerty1" />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};
