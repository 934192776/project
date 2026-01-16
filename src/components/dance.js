    function watch() {
    let name= prompt("What is your name?");
    let email = prompt("What is your email?");
    let dance = prompt("What dance do you like?");
    let emoji = prompt("What is your favorite emoji?");
     alert(
     "Thank you" + name + "! we'll touch by email, enjoy" + dance + emoji);
     if (dance === "Chinese dance"){ 
     alert("你好");
     } else{
       alert("👋👋👋");
    }
    }
   let watchButton = document.querySelector(".watch-button");
       watchButton.addEventListener("click, watch");
