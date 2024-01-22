import { v4 as uuidv4 } from "uuid";
import {
  CREATE_TASK,
  EDIT_TASK,
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_PENDING,
  UPDATE_TASK,
} from "./taskType";

const initialState = [
  {
    id: uuidv4(),
    title: "Get certified",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    completed: true,
    due_date: "2024-01-21",
    editing: false,
  },
  {
    id: uuidv4(),
    title: "I need the job",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    completed: true,
    due_date: "2024-01-21",
    editing: false,
  },
  {
    id: uuidv4(),
    title: "Congratulations",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    completed: false,
    due_date: "2024-01-21",
    editing: false,
  },
];

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TASK:
      return state.concat(action.data);

    case EDIT_TASK:
      return state.map((task) => {
        if (task.id === action.payload) {
          return { ...task, editing: true };
        }
        return { ...task, editing: false };
      });

    case UPDATE_TASK:
      return state.map((task) => {
        if (task.id === action.id) {
          return {
            ...task,
            title: action.payload.title,
            description: action.payload.description,
            due_date: action.payload.due_date,
            completed: action.payload.completed,
            editing: false,
          };
        }
        return task;
      });

    default:
      return state;
  }
};

export default taskReducer;
