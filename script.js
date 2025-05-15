const quotes = [
"I was practising, so I decided to send you a demo, too😂",
"Love You♥️ & Missing You😘"
]; //an array

const quoteElement = document.getElementById("quote"); //jo paragraph jis me quote dekhaya ja raha ha
const button = document.getElementById("new-quote"); // button jisko click krny pr quote change hoga

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteElement.textContent = quotes[randomIndex];
}

button.addEventListener("click", getRandomQuote); //jb b user button pr click kry ga function chaly ga