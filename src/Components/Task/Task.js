import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { doneState, editTask, removeTask } from "../../JS/Actions/Action";
import "./Task.css";

const Task = ({ task }) => {
  const dispatch = useDispatch();
  const [stat, setStat] = useState(task.done);
  const [editedDesc, setEditedDesc] = useState(task.desc);
  const [editing, setEditing] = useState(false);
  return (
    <div className="task">
      {editing ? (
        <input
          className="inputedit"
          autofocus="autofocus"
          value={editedDesc}
          onChange={(e) => setEditedDesc(e.target.value)}
        />
      ) : (
        <p className="desc">{task.desc}</p>
      )}

      <div className="btns">
        {editing ? (
          <button
            className="taskbtns"
            style={{ width: 70 }}
            onClick={() => {
              dispatch(editTask(task.id, editedDesc));
              setEditing(!editing);
            }}
          >
            Save
          </button>
        ) : (
          <button
            className="taskbtns"
            style={{ width: 70 }}
            onClick={() => {
              setEditing(!editing);
            }}
          >
            Edit
          </button>
        )}

        <button
          className="taskbtns"
          onClick={() => dispatch(removeTask(task.id))}
        >
          Remove
        </button>
        <button
          className="taskbtns"
          onClick={() => {
            dispatch(doneState(task.id));
            setStat(!stat);
          }}
        >
          {stat ? "Undone" : "Done"}
        </button>
      </div>
    </div>
  );
};

export default Task;
