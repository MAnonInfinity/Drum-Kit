for (var i=0; i<document.querySelectorAll(".drum").length; i++){
  document.querySelectorAll("button")[i].addEventListener("click", function (event){  //For detecting button press
    //console.log(event);
    var pressed=this.innerHTML;
    playSound(pressed);
    animateButton(pressed);
  });
}

/*
function drumClick(){
  alert("I got Clicked!");
}
*/

document.addEventListener("keypress", function(event){  //For detecting keyboard press
  //console.log(event);
  var pressed=event.key;
  if (playSound(pressed)==1){
    animateButton(pressed);
  }
});

function playSound(pressed){
  switch (pressed) {
    case "w":
      var audio=new Audio("sounds/tom-1.mp3");
      audio.play();
      return 1;
      break;
    case "a":
      var audio=new Audio("sounds/tom-2.mp3");
      audio.play();
      return 1;
      break;
    case "s":
      var audio=new Audio("sounds/tom-3.mp3");
      audio.play();
      return 1;
      break;
    case "d":
      var audio=new Audio("sounds/tom-4.mp3");
      audio.play();
      return 1;
      break;
    case "j":
      var audio=new Audio("sounds/kick-bass.mp3");
      audio.play();
      return 1;
      break;
    case "k":
      var audio=new Audio("sounds/snare.mp3");
      audio.play();
      return 1;
      break;
    case "l":
      var audio=new Audio("sounds/crash.mp3");
      audio.play();
      return 1;
      break;
    default:
      //console.log("Not a musical key");
      return 0;
  }
}

function animateButton(pressed){
  document.querySelector("."+pressed).classList.toggle("pressed");
  setTimeout(function(){
    document.querySelector("."+pressed).classList.toggle("pressed");
  }, 100);
}
