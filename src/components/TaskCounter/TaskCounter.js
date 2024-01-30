import { useSelector } from "react-redux";
import css from "./TaskCounter.module.css";
import { tasksCountSelector } from "store/selectors";

export const TaskCounter = () => {
  const { active, completed } = useSelector(tasksCountSelector);

  return (
    <div>
      <p className={css.text}>Active: {active}</p>
      <p className={css.text}>Completed: {completed}</p>
    </div>
  );
};
