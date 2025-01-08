import React from "react";
import Login from "./Login";

var isLoggedIn = false;

var currentTime = new Date().getHours();

function App() {
  return (
    <div className="container">
      {
        // isLoggedIn ? <h1>Hello</h1> : <Login />
        currentTime > 13 && <h1> Why are you still working? </h1>
      }
    </div>
  );
}

export default App;
