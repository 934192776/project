import React from "react";
import "./noodle.css";

function Noodle() {
  const handleNoodleClick = () => {
  let name = window.prompt("What is your name?");
  let email = window.prompt("What is your email?");
  let noodle = window.prompt("What noodle do you like?");
  let emoji = window.prompt("What is your favorite emoji?");
 
  alert(`Your email is ${email}`);
  alert("Thank you" + name + "! we'll touch by email, enjoy" + noodle + emoji);
  
  if (noodle === "Chinese noodle") {
    alert("来一碗热腾腾的面条！");
  } else {
    alert("👋👋👋");
  }
};

  return (
    <div className="noodle-section">
      <h3> Noodle</h3>
      <button onClick={handleNoodleClick}>点击吃面条</button>
    </div>
  );
}

export default Noodle;