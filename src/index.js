import React from "react";
import ReactDOM from "react-dom";
import Chart from "./dataset.js";
const App = () => {
  return (
    <div>
      <Chart />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
