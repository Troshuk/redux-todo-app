import { MdClose } from "react-icons/md";
import { RiLoader2Line } from "react-icons/ri";

import {
  useDeleteTaskMutation,
  useToggleCompletedMutation,
} from "store/tasks/operations";
import { notifyApi } from "notify";

import css from "./Task.module.css";

export const Task = ({ task: { id, text, completed } }) => {
  const [deleteTask, deleteTaskResult] = useDeleteTaskMutation();
  const [toggleCompleted, toggleCompletedResult] = useToggleCompletedMutation();

  const handleToggle = () =>
    notifyApi(toggleCompleted({ id, completed: !completed }), "Task update");

  const handleDelete = () => notifyApi(deleteTask(id), "Task delete");

  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        checked={completed}
        onChange={handleToggle}
        disabled={toggleCompletedResult.isLoading}
      />
      <p className={css.text}>{text}</p>
      <button
        className={css.btn}
        onClick={handleDelete}
        disabled={!deleteTaskResult.isUninitialized}
      >
        {deleteTaskResult.isUninitialized ? (
          <MdClose size={24} />
        ) : (
          <RiLoader2Line size={24} />
        )}
      </button>
    </div>
  );
};
