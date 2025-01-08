import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <img src={props.img} alt="avatar_img" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      name="Zhao Lusi"
      img="https://1.bp.blogspot.com/-WPWJIl0R9vE/YBGTkcNNKfI/AAAAAAAHztY/a_10nuRhvioSuTaUexLVkjVnQNXHQ1-PwCLcBGAsYHQ/s0/zhao_Lusi6.jpg"
      tel="+86 3937162963"
      email="zhaoLusi@gmail.com"
    />

    <Card
      name="Kim Ji Won"
      img="https://i.pinimg.com/736x/a4/c1/6b/a4c16be420cc6399b2abd553a06720f1.jpg"
      tel="+82 7291734053"
      email="kimJiWon@gmail.com"
    />

    <Card
      name="Kim Yoo Jung"
      img="https://i.pinimg.com/736x/c8/64/23/c86423aa8ea25af61cc634aef657bc05.jpg"
      tel="+82 8371637296"
      email="kimYooJung@gmail.com"
    />
  </div>,
  document.getElementById("root")
);
