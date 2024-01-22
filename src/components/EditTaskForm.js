import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Formik, Field } from "formik";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateTask } from "../redux/task/taskAction";

const EditTaskForm = () => {
  const tasks = useSelector((state) => state.task);
  const { id } = useParams();

  const [message, setMessage] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const dispatch = useDispatch();

  return (
    <div className="w-full md:w-8/12 bg-white rounded my-6 py-6 px-6">
      <h1 className="font-semibold text-xl">Edit Task</h1>
      {message && (
        <div className="w-full flex p-3 bg-green-50 text-green-900 border border-green-400 rounded px-3 space-x-2">
          <span className="text-green-900">
            Task created successfully. Go back to{" "}
            <Link to="/" className="text-blue-400">
              Dashboard
            </Link>
          </span>
        </div>
      )}
      {/* check if the right file is being edited */}
      {tasks.map((task) => {
        if (task.editing || id === task.id) {
          return (
            <div key={task.id}>
              <Formik
                initialValues={{
                  title: task.title,
                  description: task.description,
                  status: task.status,
                  completed: false,
                  due_date: JSON.stringify(startDate),
                }}
                validate={(values) => {
                  const errors = {};
                  if (!values.title) {
                    errors.title = "This field cannot be empty";
                  }
                  if (!values.description) {
                    errors.description = "This field cannot be empty";
                  }
                  return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                  setMessage("Task created successfully");
                  dispatch(updateTask(id, values));
                }}>
                {({
                  values,
                  handleChange,
                  handleSubmit,
                  isSubmitting,
                  errors,
                  touched,
                }) => (
                  <form onSubmit={handleSubmit} className="my-3 font-light">
                    <div className="my-3">
                      <label htmlFor="title">Title</label>
                      <div className="my-1">
                        <input
                          type="text"
                          name="title"
                          onChange={handleChange}
                          value={values.title}
                          className="border border-neutral-300 w-full py-2 px-2 rounded outline-none"
                          placeholder="Placeholder content"
                        />
                      </div>
                      {errors.title && touched.title ? (
                        <div className="text-red-500">{errors.title}</div>
                      ) : null}
                    </div>

                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-state">
                      Status
                    </label>
                    <div className="relative">
                      <Field
                        as="select"
                        className="block appearance-none w-full bg-gray-100 border border-gray-100 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-state"
                        name="status">
                        <option value="Pending">Pending</option>
                        <option value="Completed">Completed</option>
                      </Field>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg
                          className="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20">
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="description">Description</label>
                      <div className="my-1">
                        <textarea
                          name="description"
                          onChange={handleChange}
                          value={values.description}
                          rows="6"
                          placeholder="Placeholder content"
                          className="border border-neutral-300 w-full py-2 px-2 rounded outline-none"
                        />
                      </div>
                      {errors.description && touched.description ? (
                        <div className="text-red-500">{errors.description}</div>
                      ) : null}
                    </div>

                    <div className="my-6">
                      <DatePicker
                        className="border rounded px-2 py-1"
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                      />
                    </div>

                    <button
                      type="submit"
                      className="px-6 bg-blue-600 rounded py-2 text-white text-md my-3">
                      Submit
                    </button>
                  </form>
                )}
              </Formik>
            </div>
          );
        } else {
          return <div key={task.id}></div>;
        }
      })}
    </div>
  );
};

export default EditTaskForm;
