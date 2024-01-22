import { useState } from "react";
import { useDispatch } from "react-redux";
import { showAll, showCompleted, showPending } from "../redux/task/taskAction";

const FilterBtn = ({ filterTask }) => {
  const [dropDown, setdropDown] = useState(true);
  const dispatch = useDispatch();
  return (
    <div className="relative inline-block">
      <div>
        <button
          className="px-4 py-1 inline-flex rounded-md border border-black-300 hover:bg-gray-300"
          onClick={() => setdropDown(!dropDown)}>
          Filter
          <svg
            className="-mr-1 mt-0.5 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true">
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div
        id="dropdown"
        className={`z-10 ${
          dropDown ? "hidden" : ""
        } absolute w-34 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700`}>
        <ul
          className="py-1 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefault">
          <li
            className="block py-2 cursor-pointer px-6 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            onClick={() => filterTask("ALL")}>
            All Tasks
          </li>

          <li
            className="block py-2 cursor-pointer px-6 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            onClick={() => filterTask("PENDING")}>
            Pending
          </li>
          <li
            className="block py-2 cursor-pointer px-6 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            onClick={() => filterTask("COMPLETED")}>
            Completed
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FilterBtn;
