import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/task/taskAction";
import { v4 as uuidv4 } from "uuid";

const CreateTaskForm = () => {
  const [message, setMessage] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const dispatch = useDispatch();

  return (
    <div className="w-full lg:w-8/12 bg-white rounded m-4 py-6 px-6">
      <h1 className="font-semibold text-xl">Create Tasks</h1>
      {message && (
        <div className="w-full flex p-3 bg-green-50 text-green-900 border border-green-400 rounded px-3 space-x-2">
          <span className="text-green-900">
            Task created successfully. Go back to{" "}
            <Link to="/" className="text-blue-400">
              Dashboard
            </Link>
            .
          </span>
        </div>
      )}
      <Formik
        initialValues={{
          id: uuidv4(),
          title: "",
          description: "",
          status: "Pending",
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
          dispatch(addTask(values));
        }}>
        {({ values, handleChange, handleSubmit, errors, touched }) => (
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
};

export default CreateTaskForm;
