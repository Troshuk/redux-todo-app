import { Button } from "components";

import { useAddTaskMutation } from "store/tasks/operations";

import css from "./TaskForm.module.css";

export const TaskForm = () => {
  const [addTask] = useAddTaskMutation();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;

    addTask(form.elements.text.value).then(() => form.reset());
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.field}
        type="text"
        name="text"
        placeholder="Enter task text..."
      />
      <Button type="submit">Add task</Button>
    </form>
  );
};
