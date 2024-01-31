import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/seed/picsum/200/300";

ReactDOM.render(
  <div>
    <h1 className="heading">My Favourite Foods</h1>
    <img src={img} />

    <img
      className="dog-image"
      src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg"
    />
    <p>
      <ul>
        <li>barking</li>
        <li>playing</li>
        <li>sleeping</li>
      </ul>
    </p>
  </div>,
  document.getElementById("root")
);
