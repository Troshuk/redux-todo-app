import { MdClose } from "react-icons/md";
import css from "./Task.module.css";
import { useDispatch } from "react-redux";
import { deleteTask, toggleCompleted } from "redux/operations";

export const Task = ({ task: { id, text, completed } }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteTask(id));
  const handleToggle = () => dispatch(toggleCompleted({ id, completed }));

  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        checked={completed}
        onChange={handleToggle}
      />
      <p className={css.text}>{text}</p>
      <button className={css.btn} onClick={handleDelete}>
        <MdClose size={24} />
      </button>
    </div>
  );
};
