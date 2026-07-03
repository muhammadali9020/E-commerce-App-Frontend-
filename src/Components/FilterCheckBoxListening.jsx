import { useDispatch, useSelector } from "react-redux";
import { removeCategory, setCategory } from "../RTK_Store/Slices/Filter";
const FilterCheckBoxListeing = (props) => {
  const dispatch = useDispatch();
  const setFilters = useSelector((state) => state.FilterSlice);
  return (
    <li className="flex ml-8 gap-1.5">
      <input
        checked={setFilters.category.includes(props.categoryName)}
        onChange={(e) => {
          if (e.target.checked) {
            dispatch(setCategory(props.categoryName));
          } else {
            dispatch(removeCategory(props.categoryName));
          }
        }}
        type="checkbox"
        id={props.categoryName}
        value={props.categoryName}
      />
      <label htmlFor={props.categoryName}>{props.categoryName}</label>
    </li>
  );
};

export default FilterCheckBoxListeing;
