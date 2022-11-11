'use strict';

init();

function getRandomIndex(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomArrayItem(array) {
  let index = getRandomIndex(0, array.length - 1);
  return array[index];
}

function getRandomQuote() {
  let quotes = [
    "You miss 100% of the shots you don't take",
    'One must have chaos in oneself to give birth to a dancing star',
    "We're all travelling through time together, everyday of our lives. All we can do is do our best to relish this remarkable ride.",
    "If you think you can do a thing or think you can't do a thing, you're right.",
    'Be not afraid of greatness. Some are born great, some achieve greatness, and others have greatness thrust upon them.',
    'Advance confidently in the direction of  your dreams, and success will meet you unexpected common hours.',
    'If everything happens by chance, the result is inevitable.',
    "There's something wrong with this yogurt.' Ah, that's not yogurt, that's mayonnaise...' 'ah, right-o then.",
    'The axe forgets, but the tree remembers!',
    'Be yourself; everyone else is already taken.',
  ];

  return getRandomArrayItem(quotes);
}

function updateQuote() {
  let quote = document.querySelector('#content');
  quote.textContent = getRandomQuote();
}

function registerEvents() {
  let button = document.querySelector('button');

  button.addEventListener('click', () => updateQuote());
}

function init() {
  updateQuote();
  registerEvents();
}
