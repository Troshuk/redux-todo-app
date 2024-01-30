import { MdClose } from "react-icons/md";
import { RiLoader2Line } from "react-icons/ri";

import css from "./Task.module.css";
import {
  useDeleteTaskMutation,
  useToggleCompletedMutation,
} from "store/operations";
import { notifyApi } from "notify";

export const Task = ({ task: { id, text, completed } }) => {
  const [deleteTask, deleteTaskResult] = useDeleteTaskMutation();
  const [toggleCompleted, toggleCompletedResult] = useToggleCompletedMutation();

  const handleDelete = () => notifyApi(deleteTask(id), "Task delete");
  const handleToggle = () =>
    notifyApi(toggleCompleted({ id, completed }), "Task update");

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
