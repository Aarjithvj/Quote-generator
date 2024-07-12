const quotes = [{
    quote: '"Success usually comes to those who are too busy to be looking for it."',
    writer: '- Henry David Thoreau'
}, {
    quote:'"Things work out best for those who make the best of how things work out."',
    writer: '-John Wooden'
}, {
    quote:'"If you are not willing to risk the usual, you will have to settle for the ordinary."',
    writer: '-Jim Rohn'
}, {
    quote:'"All our dreams can come true if we have the courage to pursue them."',
    writer: '-Walt Disney'
}, {
    quote:'"The best revenge is massive success."',
    writer: '-Frank Sinatra'
}, {
    quote:'"If you want to make a permanent change, stop focusing on the size of your problems and start focusing on the size of you!"',
    writer: '- T. Harv Eker'
}, {
    quote:'"Motivation is what gets you started. Habit is what keeps you going."',
    writer: '- Jim Ryun'
},]


let btn = document.querySelector("#qbtn");
let quoteDisplay = document.querySelector(".quote");
let writerDisplay = document.querySelector(".writer");

btn.addEventListener("click", function() {
    let random = Math.floor(Math.random() * quotes.length);

    quoteDisplay.textContent = quotes[random].quote;

    writerDisplay.textContent = quotes[random].writer;
});