//var React = require("react");
//var ReactDOM = require("react-dom");

import React from "react";
import ReactDom from "react-dom";

//ReactDom.render(what to show, where to show)
ReactDom.render(
  <div>
    <h1> hello world!, My fav things are</h1>
    <ul>
      <li>dancing</li>
      <li>football</li>
    </ul>
  </div>,
  document.getElementById("root")
);
// now if we want of add another html element <P> then we cant do like this cuz it only takes one element
//For this we have to use div
