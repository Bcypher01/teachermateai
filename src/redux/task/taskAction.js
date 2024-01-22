import {
  CREATE_TASK,
  SHOW_COMPLETED,
  SHOW_PENDING,
  UPDATE_TASK,
} from "./taskType.js";

export const showCompleted = () => {
  return { type: SHOW_COMPLETED };
};

export const showPending = () => {
  return { type: SHOW_PENDING };
};

export const addTask = (task) => {
  return (dispatch) => {
    dispatch({ type: CREATE_TASK, payload: task });
  };
};

export const updateTask = (id, task) => {
  return (dispatch) => {
    dispatch({ type: UPDATE_TASK, id: id, payload: task });
  };
};
