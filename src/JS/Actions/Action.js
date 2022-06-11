import {
  ADD_TASK,
  DISPLAY_STATUS,
  DONE_STATE,
  EDIT_TASK,
  REVOME_TASK,
} from "../Constants/ActionTypes";

export const addTask = (desc) => {
  return {
    type: ADD_TASK,
    payload: desc,
  };
};
export const removeTask = (id) => {
  return {
    type: REVOME_TASK,
    payload: id,
  };
};

export const editTask = (id, desc) => {
  return {
    type: EDIT_TASK,
    payload: { id, desc },
  };
};
export const doneState = (id) => {
  return {
    type: DONE_STATE,
    payload: id,
  };
};
export const displayStatus = (state) => {
  return {
    type: DISPLAY_STATUS,
    payload: state,
  };
};
