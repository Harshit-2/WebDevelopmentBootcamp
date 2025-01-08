import React from "react";
import ReactDOM from "react-dom";

const fName = "Angela";
const lName = "Yu";
const num = Math.floor(Math.random() * 10);

ReactDOM.render(
  <div>
    {" "}
    <h1>Hello {`${fName} ${lName}` /* or {fname} {lName} */}!</h1>
    <p>Your lucky number is {num}.</p>
  </div>,
  document.getElementById("root")
);
