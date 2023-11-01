/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// NOTE: Utilized Stack Overflow (https://stackoverflow.com/questions/5195303/set-css-property-in-javascript)
// to learn about how to access css styles of an element.
// Used only at line 112

// Creates array of quote objects.
const quotes = [
  { // quote object includes quote, source, citation and type of content the quote was taken from (typeOfContent)
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
    citation: "An Essay on Criticism to the US Institutes of Medicine's report on patient safety: To Err is Human",
    typeOfContent: 'essay'
  },
  {
    quote: "Go ahead, make my day.",
    source: "Harry Callahan (character)",
    citation: "Sudden Impact",
    year: 1983,
    typeOfContent: 'movie'
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

/**
 * Generates a random rgb color value
 * 
 * @returns randomColor
 */
function getRandomColor() {
  let randomColor =  `rgb(`;
  for (let i = 0; i < 3; i++) {
    randomColor += Math.floor(Math.random() * 255);
    // If statement that make sure a comma isnt added after the last element.
    if (i < 2) {
      randomColor += `, `;
    }
  }
  randomColor += `)`;
  return randomColor;
}

console.log(getRandomColor());

/**
 * Adds an html snippet to the linked html document & changes background color.
 */

function printQuote() {
  // 1. Create a variable that calls the getRandomQuote() function
  let quoteObject = getRandomQuote(quotes);

  // 2. Create a variable that initiates the HTML string
  let html = `<p class="quote">${quoteObject.quote}</p>
  <p class="source">${quoteObject.source}`;

  // 3. If statement to check if the citation property exists
  if (quoteObject.citation) {
    html += `<span class="citation">${quoteObject.citation}</span>;
    `;
  }

  // 4. If statement to check if the year property exists
  if (quoteObject.year) {
    html += `<span class="year">${quoteObject.year}</span>;
    `;
  }

  // If statement to check if the typeOfContent property exists
  if (quoteObject.typeOfContent) {
    html += `<span class="typeOfContent">${quoteObject.typeOfContent}</span>;
    `;
  }

  // 5. Close the p tag
  html += `</p>`;

  // 6. Adds complete string to the HTML document
  document.getElementById('quote-box').innerHTML = html; 

  // Change background color
  let element = document.querySelector('body');
  element.style.backgroundColor = getRandomColor();
}

document.getElementById('load-quote').addEventListener("click", printQuote, false);