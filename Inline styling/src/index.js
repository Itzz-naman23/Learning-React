import React from "react";
import ReactDOM from "react-dom";

const headingstyle = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black",
};
headingstyle.color = "green";

ReactDOM.render(
  <h1 style={headingstyle}>Hello World!</h1>,
  document.getElementById("root")
);
