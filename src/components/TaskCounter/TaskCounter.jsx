import { useSelector } from "react-redux";

import { tasksCountSelector } from "store/tasks/selectors";

import css from "./TaskCounter.module.css";

export const TaskCounter = () => {
  const { active, completed } = useSelector(tasksCountSelector);

  return (
    <div>
      <p className={css.text}>Active: {active}</p>
      <p className={css.text}>Completed: {completed}</p>
    </div>
  );
};
