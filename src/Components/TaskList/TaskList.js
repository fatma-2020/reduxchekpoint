import React from "react";
import { useSelector } from "react-redux";
import Task from "../Task/Task";
import "./TaskList.css";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const status = useSelector((state) => state.display);

  return (
    <div>
      <div className="tasksBlock">
        {status === "ALL"
          ? tasks.map((task) => <Task key={task.id} task={task} />)
          : status === "DONE"
          ? tasks
              .filter((task) => task.done)
              .map((taskf) => <Task key={taskf.id} task={taskf} />)
          : tasks
              .filter((task) => !task.done)
              .map((taskf) => <Task key={taskf.id} task={taskf} />)}
      </div>
    </div>
  );
};

export default TaskList;
