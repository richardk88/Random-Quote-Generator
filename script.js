/*Random Quote Button*/
$(document).ready(function(){
  
  function getQuote(){
    
    var quotes = ["If light is in your heart, you will find your way home", "The meaning of life is to find your gift. The purpose of life is to give it away.", "If a thing loves, it is infinite.", "You can't wait for inspiration, you have to go after it with a club.", "Why not go out on a limb? That's where the fruit is.", "We are all broken, that's how the light gets in.", "It's never too late to be what you might have been.", "Our lives are defined by opportunities, even the ones we miss.", "Hardships often prepare ordinary people for an extraordinary destiny.", "If we wait until we're ready, we'll be waiting for the rest of our lives."];
    var author = ["Rumi", "William Shakespeare", "William Blake", "Jack London", "Mark Twain", "Ernest Hemingway", "George Eliot", "F. Scott Fitzgerald", "C.S. Lewis", "Lemony Snicket"];
    
    var randomNum = Math.floor((Math.random()*quotes.length));
    var randomQuote = quotes[randomNum];
    var randomAuthor = author[randomNum];
    
    $(".quote").text('"'+ randomQuote+'"');
    $(".author").text('- '+randomAuthor);
  }
    $(".button").on("click", function(){
      getQuote();
    });
  });


/*Tweet Code*/
$("#tweet").on("click", function(){
  var sentence = $('.quote').text();
  var person = $('.author').text();
  window.open("https://twitter.com/intent/tweet?text=" + sentence + person);
});