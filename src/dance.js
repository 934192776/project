import React from 'react';
import './dance.css';

function Dance() {
  const handleWatch = () => {
    let name = prompt("What is your name?");
    let email = prompt("What is your email?");
    let dance = prompt("What dance do you like?");
    let emoji = prompt("What is your favorite emoji?");
    
    alert(`Your email is ${email}`);
    alert(`Thank you ${name}! We'll touch by email, enjoy ${dance} ${emoji}`);
    
    if (dance === "Chinese dance") {
      alert("Ni Hao");
    } else {
      alert("💃🕺");
    }
  };

  return (
    <div className="dance-section">
      <h3> Dance</h3>
      <button className="watch-button" onClick={handleWatch}>
        Choose one
      </button>
    </div>
  );
}

export default Dance;