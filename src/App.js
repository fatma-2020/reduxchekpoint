import "./App.css";
import { Route, Routes } from "react-router-dom";
import TaskList from "./Components/TaskList/TaskList";
import AddTask from "./Components/AddTask/AddTask";
import Display from "./Components/Display/Display";

function App() {
  return (
    <div className="App">
      <h1 className="title">To do list </h1>
      <Routes>
        <Route
          path="/"
          element={
            <div className="distasks">
              {" "}
              <Display />
              <TaskList />
            </div>
          }
        />
        <Route path="/Add" element={<AddTask />} />
      </Routes>
    </div>
  );
}

export default App;
