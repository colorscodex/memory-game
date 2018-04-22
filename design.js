$(document).ready(function(){

    $("#navbar").click(function(){

        $("#panel").slideToggle("slow");
    });
});

/* Created an array with my phrases and for adding to the cards.
=============================================================== */

var myString = [
    "Hello",
    "world!",
    "The memory",
    "game",
    "It is starting",
    "to work",
    "I can",
    "do it!",
    "Hello",
    "world!",
    "The memory", 
    "game",
    "It is starting", 
    "to work",
    "I can",
    "do it!"
    ];

/* Use the Shuffle function for shuffling the cards and change their position each time the page is loaded. */

shuffle(myString);

/* Then, add one phrase for each p element. */

document.getElementById("one").innerHTML= myString[0];
document.getElementById("two").innerHTML= myString[1];
document.getElementById("three").innerHTML= myString[2];
document.getElementById("four").innerHTML= myString[3];
document.getElementById("five").innerHTML= myString[4];
document.getElementById("six").innerHTML= myString[5];
document.getElementById("seven").innerHTML= myString[6];
document.getElementById("eight").innerHTML= myString[7];
document.getElementById("nine").innerHTML= myString[8];
document.getElementById("ten").innerHTML= myString[9];
document.getElementById("eleven").innerHTML= myString[10];
document.getElementById("twelve").innerHTML= myString[11];
document.getElementById("thirteen").innerHTML= myString[12];
document.getElementById("fourteen").innerHTML= myString[13];
document.getElementById("fifteen").innerHTML= myString[14];
document.getElementById("sixteen").innerHTML= myString[15];


// Shuffle function from http://stackoverflow.com/a/2450976
        
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


/*	Rotate the cards with jQuery:
	.addClass(className) / .removeClass(className) methods for adding or removing one class from each element.
	========================================================================================================== */

$(document).ready(function(){

	$( ".card" ).click(function(e) {
		e.preventDefault();
		$( this ).addClass( "rotate-card");
	});
});

$(document).ready(function(){
	
	$( "#turn-back" ).click(function(e) {
		e.preventDefault();
		$(".card" ).removeClass( "rotate-card");
	});
});

// The reload() method to reload the current document.

$(document).ready(function(){
	$( "#restart" ).click(function(e) {
		location.reload();
	});
});







