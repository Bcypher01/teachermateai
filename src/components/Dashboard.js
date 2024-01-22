import { Statistics } from "./Statistics";
import { Table } from "./Table";
import FilterBtn from "./FilterBtn";
import { useSelector } from "react-redux";
import { useState } from "react";

export const Dashboard = () => {
  const { tasks } = useSelector((state) => ({
    tasks: state.task,
  }));
  const [filtered, setFiltered] = useState(tasks);
  const filterTask = (status) => {
    if (status === "ALL") {
      setFiltered(tasks);
    }
    if (status === "COMPLETED") {
      setFiltered(tasks.filter((t) => t.completed));
    }
    if (status === "PENDING") {
      setFiltered(tasks.filter((t) => !t.completed));
    }
  };
  return (
    <div>
      <Statistics />
      <div className="w-full bg-white rounded my-6 py-4 px-6">
        <div className="flex">
          <h1 className="font-semibold text-2xl">Tasks</h1>
          <span className="ml-auto">
            <FilterBtn filterTask={filterTask} />
          </span>
        </div>

        <Table filtered={filtered} />
      </div>
    </div>
  );
};
