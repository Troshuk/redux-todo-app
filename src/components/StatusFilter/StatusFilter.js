import { useDispatch, useSelector } from "react-redux";

import { Button } from "components/Button/Button";

import { statusFilters } from "store/constants";
import { statusFilterSelector } from "store/selectors";
import { setStatusFilter } from "store/filter/reducer";

import css from "./StatusFilter.module.css";

export const StatusFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(statusFilterSelector);

  const handleFilterChange = filter => dispatch(setStatusFilter(filter));

  return (
    <div className={css.wrapper}>
      {Object.entries(statusFilters).map(([key, value]) => (
        <Button
          key={key}
          selected={filter === key}
          onClick={() => handleFilterChange(key)}
        >
          {value}
        </Button>
      ))}
    </div>
  );
};
