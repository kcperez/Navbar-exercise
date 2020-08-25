import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import Showcase from "./components/Showcase";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="main">
        <Showcase />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
