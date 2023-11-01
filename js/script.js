/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Creates array of quote objects.
const quotes = [
  { // quote object includes quote, source, and citation (if present)
    quote: "Three can keep a secret, if two of them are dead.",
    source: "Benjamin Franklin",
    year: 1735,
  },
  {
    quote: "Tis better to have loved and lost than never to have loved at all.",
    source: "Alfred Lord Tennyson"
  },
  {
    quote: "To be or not to be, that is the question.",
    source: "William Shakespeare"
  },
  {
    quote: "To err is human; to forgive, divine.",
    source: "Alexander Pope",
    citation: "An Essay on Criticism to the US Institutes of Medicine's report on patient safety: To Err is Human"
  },
  {
    quote: "Go ahead, make my day.",
    source: "Harry Callahan (character)",
    citation: "Sudden Impact",
    year: 1983
  }
];

// console.log(quotes); successful test of quotes array

/**
 * Returns random value from an array passed to it.
 * 
 * @param {Array} arr Array to get random value from .
 * @returns {array} Random value in arr.
 */

function getRandomQuote(arr) {
  let randomNum = Math.floor(Math.random() * arr.length); // Generates random number
  return arr[randomNum]; // Returns random quote object
}

// console.log(getRandomQuote(quotes)); successful test of getRandomQuote

/**
 * Adds an html snippet to the linked html document.
 */

function printQuote() {
  // 1. Create a variable that calls the getRandomQuote() function
  let quoteObject = getRandomQuote(quotes);

  // 2. Create a variable that initiates the HTML string
  let html = `<p class="quote">${quoteObject.quote}</p>
  <p class="source">${quoteObject.source}
  `;

  // 3. If statement to check if the citation property exists
  if (quoteObject.citation) {
    html += `<span class="citation">${quoteObject.citation};
    `;
  }

  // 4. If statement to check if the year property exists
  if (quoteObject.year) {
    html += `<span class="year">${quoteObject.year};
    `;
  }

  // 5. Close the p tag
  html += `</p>`;

  // 6. Adds complete string to the HTML document
  document.getElementById('quote-box').innerHTML = html; 
}

document.getElementById('load-quote').addEventListener("click", printQuote, false);