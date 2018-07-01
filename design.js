//  To prevent any jQuery code from running before the document is finished loading (is ready).

$(document).ready(function(){
    
//  To open the panel named Methods used with some information.
    $("#navbar").click(function(){
        $("#panel").slideToggle("slow");
    });


/*  Created an array with my quotes and for adding to the cards.
    ============================================================ */

    var myQuotes = [
        "Hello",
        "world!",
        "The memory",
        "game",
        "Start",
        "to work",
        "I can",
        "do it!",
        ];
    var myQuotesRepeat = myQuotes.slice();    

    /*  
    First, use the Shuffle function for shuffling the cards and change their position each time the page is loaded. 
    =============================================================================================================== */
    
    shuffle(myQuotes);
    shuffle(myQuotesRepeat);

    /*  
    Second, add one phrase for each p element. 
    ========================================== */

    document.getElementById("one").innerHTML= myQuotes[0];
    document.getElementById("two").innerHTML= myQuotes[1];
    document.getElementById("three").innerHTML= myQuotes[2];
    document.getElementById("four").innerHTML= myQuotes[3];
    document.getElementById("five").innerHTML= myQuotes[4];
    document.getElementById("six").innerHTML= myQuotes[5];
    document.getElementById("seven").innerHTML= myQuotes[6];
    document.getElementById("eight").innerHTML= myQuotes[7];
    document.getElementById("nine").innerHTML= myQuotesRepeat[0];
    document.getElementById("ten").innerHTML= myQuotesRepeat[1];
    document.getElementById("eleven").innerHTML= myQuotesRepeat[2];
    document.getElementById("twelve").innerHTML= myQuotesRepeat[3];
    document.getElementById("thirteen").innerHTML= myQuotesRepeat[4];
    document.getElementById("fourteen").innerHTML= myQuotesRepeat[5];
    document.getElementById("fifteen").innerHTML= myQuotesRepeat[6];
    document.getElementById("sixteen").innerHTML= myQuotesRepeat[7];

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

    /*
    Rotate the cards with jQuery:
    .addClass(className) / .removeClass(className) methods for adding or removing one class from each element.
    ========================================================================================================== */

    //  To prevent any jQuery code from running before the document is finished loading (is ready).
    //  Select all <div> elements with class="card".
    //  The click() method attaches an event handler function to an HTML element.
    //  The function is executed when the user clicks on the HTML element.
    
    let count = 1;
    $( ".card" ).click(function(e) {
        e.preventDefault();
        $( this ).addClass( "rotate-card");
        
        //  For opening only two cards.
        
        for(let i=1; i<= 20; i++){
            
            if(count %= 2){
                $(this).siblings().removeClass("rotate-card");
            }
        }

        count++;
        return;
        
        
    });

    $( "#turn-back" ).click(function(e) {
        e.preventDefault();
        $(".card" ).removeClass( "rotate-card");
    });


    /*  
    When clic the button named shuffle, shuffle the cards for a new game.
    ===================================================================== */
   
    $("#restart").on("click",function myShuffle () {
        
        // new array shuffleQuotes / shuffleQuotesRepeat
        var shuffleQuotes = shuffle(myQuotes);
        var shuffleQuotesRepeat = shuffle(myQuotesRepeat);
        
        document.getElementById("one").innerHTML= shuffleQuotes[0];
        document.getElementById("two").innerHTML= shuffleQuotes[1];
        document.getElementById("three").innerHTML= shuffleQuotes[2];
        document.getElementById("four").innerHTML= shuffleQuotes[3];
        document.getElementById("five").innerHTML= shuffleQuotes[4];
        document.getElementById("six").innerHTML= shuffleQuotes[5];
        document.getElementById("seven").innerHTML= shuffleQuotes[6];
        document.getElementById("eight").innerHTML= shuffleQuotes[7];
        document.getElementById("nine").innerHTML= shuffleQuotesRepeat[0];
        document.getElementById("ten").innerHTML= shuffleQuotesRepeat[1];
        document.getElementById("eleven").innerHTML= shuffleQuotesRepeat[2];
        document.getElementById("twelve").innerHTML= shuffleQuotesRepeat[3];
        document.getElementById("thirteen").innerHTML= shuffleQuotesRepeat[4];
        document.getElementById("fourteen").innerHTML= shuffleQuotesRepeat[5];
        document.getElementById("fifteen").innerHTML= shuffleQuotesRepeat[6];
        document.getElementById("sixteen").innerHTML= shuffleQuotesRepeat[7];
    });
});








