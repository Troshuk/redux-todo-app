import { Task } from "components/Task/Task";
import css from "./TaskList.module.css";
// Import object with filter status options
import { statusFilters } from "redux/constants";
import { useSelector } from "react-redux";
import { getStatusFilter, getTasks } from "redux/selectors";

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
  // Get tasks list from the Redux state
  const tasks = useSelector(getTasks);
  // Get current filter option from Redux state
  const statusFilter = useSelector(getStatusFilter);
  // Get list of tasks to be displayed
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
