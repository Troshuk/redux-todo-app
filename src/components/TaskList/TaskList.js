import { statusFilters } from "redux/constants";
import { useSelector } from "react-redux";

import { Task } from "components/Task/Task";
import { selectStatusFilter, selectTasks } from "redux/selectors";
import css from "./TaskList.module.css";

const getVisibleTasks = (tasks, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.active:
      return tasks.filter(({ completed }) => !completed);

    case statusFilters.completed:
      return tasks.filter(({ completed }) => completed);

    default:
      return tasks;
  }
};

export const TaskList = () => {
  const tasks = useSelector(selectTasks);
  const statusFilter = useSelector(selectStatusFilter);
  const visibleTasks = getVisibleTasks(tasks, statusFilter);

  return (
    <ul className={css.list}>
      {visibleTasks?.map(task => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
