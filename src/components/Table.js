import { useDispatch } from "react-redux";
import { EDIT_TASK } from "../redux/task/taskType";
import { Link } from "react-router-dom";

export const Table = ({ filtered }) => {
  const dispatch = useDispatch();

  // shorten description text
  function truncate(str, n) {
    return str.length > n ? str.slice(0, n - 1) + "..." : str;
  }

  // Make date format appealing
  function cleanDate(str) {
    const replace = (s) => {
      return s.replace(/['"]+/g, "");
    };
    return replace(str.slice(0, 11));
  }

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-4">
      <table className="w-full text-md text-left text-gray-500">
        <thead className="text-lg text-gray-700 bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 border-r">
              Title
            </th>
            <th scope="col" className="px-6 py-3 border-r">
              Description
            </th>
            <th scope="col" className="px-6 py-3 border-r">
              Due Date
            </th>
            <th scope="col" className="px-6 py-3 border-r">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {filtered?.map((task) => (
            <tr className="bg-white border-b" key={task.id}>
              <th
                scope="row"
                className="px-6 py-4 border-r text-md text-neutral-800 font-normal text-gray-900 whitespace-nowrap">
                {task.title}
              </th>
              <td className="px-6 py-4 border-r text-md text-neutral-800">
                {truncate(task.description, 30)}
              </td>
              <td className="px-6 py-4 border-r text-md text-neutral-800">
                {cleanDate(task.due_date)}
              </td>
              <td className="px-6 py-4 border-r text-md text-neutral-800">
                {task.completed ? "Completed" : "Pending"}
              </td>
              <td className="flex space-x-2 px-6 py-4">
                <Link to={`/edit-task/${task.id}`}>
                  <button
                    className="flex space-x-1 font-medium text-white bg-blue-600 px-2 py-1 rounded"
                    onClick={() =>
                      dispatch({ type: EDIT_TASK, payload: task.id })
                    }>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M15.5325 6.9675L11.0325 2.4675C10.9634 2.40004 10.8819 2.34656 10.7925 2.31C10.6995 2.27221 10.6004 2.25187 10.5 2.25H4.5C3.90326 2.25 3.33097 2.48705 2.90901 2.90901C2.48705 3.33097 2.25 3.90326 2.25 4.5V13.5C2.25 14.0967 2.48705 14.669 2.90901 15.091C3.33097 15.5129 3.90326 15.75 4.5 15.75H13.5C14.0967 15.75 14.669 15.5129 15.091 15.091C15.5129 14.669 15.75 14.0967 15.75 13.5V7.5C15.7506 7.4013 15.7317 7.30345 15.6943 7.21207C15.657 7.12069 15.602 7.03758 15.5325 6.9675ZM6.75 3.75H9.75V5.25H6.75V3.75ZM11.25 14.25H6.75V12C6.75 11.8011 6.82902 11.6103 6.96967 11.4697C7.11032 11.329 7.30109 11.25 7.5 11.25H10.5C10.6989 11.25 10.8897 11.329 11.0303 11.4697C11.171 11.6103 11.25 11.8011 11.25 12V14.25ZM14.25 13.5C14.25 13.6989 14.171 13.8897 14.0303 14.0303C13.8897 14.171 13.6989 14.25 13.5 14.25H12.75V12C12.75 11.4033 12.5129 10.831 12.091 10.409C11.669 9.98705 11.0967 9.75 10.5 9.75H7.5C6.90326 9.75 6.33097 9.98705 5.90901 10.409C5.48705 10.831 5.25 11.4033 5.25 12V14.25H4.5C4.30109 14.25 4.11032 14.171 3.96967 14.0303C3.82902 13.8897 3.75 13.6989 3.75 13.5V4.5C3.75 4.30109 3.82902 4.11032 3.96967 3.96967C4.11032 3.82902 4.30109 3.75 4.5 3.75H5.25V6C5.25 6.19891 5.32902 6.38968 5.46967 6.53033C5.61032 6.67098 5.80109 6.75 6 6.75H10.5C10.6989 6.75 10.8897 6.67098 11.0303 6.53033C11.171 6.38968 11.25 6.19891 11.25 6V4.8075L14.25 7.8075V13.5Z"
                        fill="white"
                      />
                    </svg>
                    <span>Edit</span>
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
