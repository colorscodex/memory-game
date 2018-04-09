/* test area: myCard.
===================== */

const myCard = document.getElementById("card1");

function myFunctionTest () {

  myCard.style.transform = "rotateY(180deg)";
  myCard.style.WebkitTransform = "rotateY(180deg)";
}

myCard.addEventListener("click", myFunctionTest);


const myButton = document.getElementById('turn-back');

function myTurnBack(){
  
  myCard.style.transform = "rotateY(360deg)";
  myCard.style.WebkitTransform = "rotateY(360deg)";
}

myButton.addEventListener("click", myTurnBack);
  
