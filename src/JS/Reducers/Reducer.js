import { v4 as uuidv4 } from "uuid";
import {
  ADD_TASK,
  DISPLAY_STATUS,
  DONE_STATE,
  EDIT_TASK,
  REVOME_TASK,
} from "../Constants/ActionTypes";
const initialState = {
  display: "ALL",
  tasks: [{ id: uuidv4(), desc: "Dinner at 7 H 30", done: true },{ id: uuidv4(), desc: "Workout at 17 H 30", done: false }],
};
export const tasksReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, { id: uuidv4(), desc: payload, done: false }],
      };
    case REVOME_TASK:
      return { ...state, tasks: state.tasks.filter((task) => task.id !== payload) };
    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === payload.id ? { ...task, desc: payload.desc } : task
        ),
      };
    case DONE_STATE:
      return {
        ...state,
        tasks: [
          ...state.tasks.map((task) =>
            task.id === payload ? { ...task, done: !task.done } : task
          ),
        ],
      };
    case DISPLAY_STATUS:
      return {
        ...state,
        display: payload,
      };

    default:
      return state;
  }
};
