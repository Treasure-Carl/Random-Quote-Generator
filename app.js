var quote = [
 "That's one small step for a man, a giant leap for mankind <br> <h3>-Neil Armstrong</h3>",
 "The only thing we have to fear is fear itself <br> <h3>-Franklin D. Roosevelt</h3>",
 "The Love of money is the root of all eveil <br> <h3>-The Bible</h3>",
 "The truth would set you free <br> <b>Always speek the truth</b> <br> <h3>-The Bible</h3>",
 "The Greatest trial in life is the pleasure of finding things out <br> <h3>Richard Frynman</h3>",
 
];

function getQuote() {
   var randomNumber =  Math.floor(Math.random() * quote.length)
    
    document.querySelector('#newQuoteSection').innerHTML = quote[randomNumber];
// return randomNumber
}
// console.log(getQuote())
document.querySelector("#button").addEventListener("click", function(){
    getQuote();
})



