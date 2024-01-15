import { useSelector } from "react-redux";
import css from "./TaskCounter.module.css";
import { getTasks } from "redux/selectors";

export const TaskCounter = () => {
  // Get tasks list from Redux state
  const tasks = useSelector(getTasks);

  // Count active and completed tasks
  const { active, completed } = tasks.reduce(
    (acc, { completed }) => {
      if (completed) {
        acc.completed += 1;
      } else {
        acc.active += 1;
      }

      return acc;
    },
    { active: 0, completed: 0 }
  );

  return (
    <div>
      <p className={css.text}>Active: {active}</p>
      <p className={css.text}>Completed: {completed}</p>
    </div>
  );
};
