import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { displayStatus } from "../../JS/Actions/Action";
import "./Display.css";

const Display = () => {
  const dispatch = useDispatch();

  const DispStatus = ["ALL", "DONE", "UNDONE"];
  //
  return (
    <div className="dispadd">
      <div className="selectdiv">
        <label>
          <select onChange={(e) => dispatch(displayStatus(e.target.value))}>
            {DispStatus.map((e) => (
              <option value={e} key={e}>
                {e}
              </option>
            ))}
          </select>
        </label>
      </div>
      <Link to="/Add">
        <button className="addbtn">
          <span className="text">New task</span>
        </button>
      </Link>
    </div>
  );
};

export default Display;
