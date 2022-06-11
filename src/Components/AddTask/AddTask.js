import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addTask } from "../../JS/Actions/Action";
import "./AddTask.css";

const AddTask = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [newDesc, setNewDesc] = useState("");

  return (
    <div>
      <input
        className="input"
        autofocus="autofocus"
        onChange={(e) => setNewDesc(e.target.value)}
      />
      <button
        className="addBtns"
        onClick={() => {
          if (newDesc) {
            dispatch(addTask(newDesc));
            navigate("/");
          } else window.alert("Empty field");
        }}
      >
        Add new task
      </button>
    </div>
  );
};

export default AddTask;
