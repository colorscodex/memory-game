//  To open the panel named Methods used with some information.
//  To prevent any jQuery code from running before the document is finished loading (is ready).

$(document).ready(function(){

    $("#navbar").click(function(){

        $("#panel").slideToggle("slow");
    });
});

/*  Created an array with my quotes and for adding to the cards.
    ============================================================ */

var myQuotes = [
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

/*  First, use the Shuffle function for shuffling the cards and change their position each time the page is loaded. 
    =============================================================================================================== */

shuffle(myQuotes);

/*  Second, add one phrase for each p element. 
    ========================================== */

document.getElementById("one").innerHTML= myQuotes[0];
document.getElementById("two").innerHTML= myQuotes[1];
document.getElementById("three").innerHTML= myQuotes[2];
document.getElementById("four").innerHTML= myQuotes[3];
document.getElementById("five").innerHTML= myQuotes[4];
document.getElementById("six").innerHTML= myQuotes[5];
document.getElementById("seven").innerHTML= myQuotes[6];
document.getElementById("eight").innerHTML= myQuotes[7];
document.getElementById("nine").innerHTML= myQuotes[8];
document.getElementById("ten").innerHTML= myQuotes[9];
document.getElementById("eleven").innerHTML= myQuotes[10];
document.getElementById("twelve").innerHTML= myQuotes[11];
document.getElementById("thirteen").innerHTML= myQuotes[12];
document.getElementById("fourteen").innerHTML= myQuotes[13];
document.getElementById("fifteen").innerHTML= myQuotes[14];
document.getElementById("sixteen").innerHTML= myQuotes[15];

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

/*  Rotate the cards with jQuery:
    .addClass(className) / .removeClass(className) methods for adding or removing one class from each element.
    ========================================================================================================== */

//  To prevent any jQuery code from running before the document is finished loading (is ready).
//  Select all <div> elements with class="card".
//  The click() method attaches an event handler function to an HTML element.
//  The function is executed when the user clicks on the HTML element.

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

/*  When clic the button named shuffle, shuffle the cards for a new game.
    ==================================================================== */

$(document).ready(function(){
    
    $("#restart").on("click",function myShuffle () {
        
        // new array shuffleQuotes 
        let shuffleQuotes = shuffle(myQuotes);
        
        document.getElementById("one").innerHTML= shuffleQuotes[0];
        document.getElementById("two").innerHTML= shuffleQuotes[1];
        document.getElementById("three").innerHTML= shuffleQuotes[2];
        document.getElementById("four").innerHTML= shuffleQuotes[3];
        document.getElementById("five").innerHTML= shuffleQuotes[4];
        document.getElementById("six").innerHTML= shuffleQuotes[5];
        document.getElementById("seven").innerHTML= shuffleQuotes[6];
        document.getElementById("eight").innerHTML= shuffleQuotes[7];
        document.getElementById("nine").innerHTML= shuffleQuotes[8];
        document.getElementById("ten").innerHTML= shuffleQuotes[9];
        document.getElementById("eleven").innerHTML= shuffleQuotes[10];
        document.getElementById("twelve").innerHTML= shuffleQuotes[11];
        document.getElementById("thirteen").innerHTML= shuffleQuotes[12];
        document.getElementById("fourteen").innerHTML= shuffleQuotes[13];
        document.getElementById("fifteen").innerHTML= shuffleQuotes[14];
        document.getElementById("sixteen").innerHTML= shuffleQuotes[15];
    });
});








