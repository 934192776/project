    function watch() {
    let name= promp("What is your name?");
    let email = prompt("What is your email?");
    let dance = prompt("What noodle do you like?");
    let emoji = prompt("What is your favorite emoji?");
     alert(
     "Thank you" + name + "! we'll touch by email, enjoy" + noodle + emoji);
     if (dance === "Chinese noodle"){ 
     alert("你好");
     } else{
       alert("👋👋👋");
    }
    }
   let watchButton = document.querySelector(".watchButton");
       watchButton.addEventListener("click, watch");
