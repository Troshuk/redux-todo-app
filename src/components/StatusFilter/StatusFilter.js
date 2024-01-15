import { Button } from "components/Button/Button";
import css from "./StatusFilter.module.css";
import { useDispatch, useSelector } from "react-redux";
// Import object with filter status options
import { statusFilters } from "redux/constants";
import { getStatusFilter } from "redux/selectors";
import { setStatusFilter } from "redux/filterSlice";

export const StatusFilter = () => {
  const dispatch = useDispatch();

  // Get current filter status from state of Redux
  const filter = useSelector(getStatusFilter);

  const handleFilterChange = filter => dispatch(setStatusFilter(filter));

  return (
    <div className={css.wrapper}>
      <Button
        selected={filter === statusFilters.all}
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        All
      </Button>
      <Button
        selected={filter === statusFilters.active}
        onClick={() => handleFilterChange(statusFilters.active)}
      >
        Active
      </Button>
      <Button
        selected={filter === statusFilters.completed}
        onClick={() => handleFilterChange(statusFilters.completed)}
      >
        Completed
      </Button>
    </div>
  );
};
