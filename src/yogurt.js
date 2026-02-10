import React from "react";
import "./yogurt.css";

function Yogurt() {
  const handleClick = () => {
    let name = prompt("What is your name?");
    if (name?.length) {
      alert(
        `Thanks, ${name}! We will be in touch. Meanwhile, have a lot of Yogurt!`
      );
    } else {
      alert("No name, no Greek Yogurt for you!");
    }
  };

  return (
     <div className="yogurt-section">
      <h3> Yogurt</h3>
      <button className="btn" onClick={handleClick}>
        点击试试
      </button>
     </div>
  );
}

export default Yogurt;