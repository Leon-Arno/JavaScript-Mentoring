// * Global Objects

// console.log(this);
console.log(window);
console.log(document);

// * Querying or getting elements from the document by name

// ? Document.querySelector()
// - returns the first Element within the document that matches the specified selector, or group of selectors. If no matches are found, null is returned.

const body = document.querySelector('body');
const header = document.querySelector('header');
const h1 = document.querySelector('h1');
const main = document.querySelector('main');
const footer = document.querySelector('footer');

// * Saving queries in an object
// const elements = {
//   body: document.querySelector('body'),
//   body: document.querySelector('body'),
//   header: document.querySelector('header'),
//   h1: document.querySelector('h1'),
//   main: document.querySelector('main'),
//   footer: document.querySelector('footer'),
// };

// ? Document.querySelectorAll()
//returns a NodeList representing a list of the document's elements that match the specified group of selectors.

const paragraphs = document.querySelectorAll('p');
console.log('Paragraphs:', paragraphs);

// Apply changes to elements in a NodeList
paragraphs.forEach((element) => (element.style.color = 'blue'));

// Using for...of loop
for (const element of paragraphs) {
  element.style.fontFamily = 'Avenir';
}

// ? Document.getElementById()
// - returns an Element object representing the element whose id property matches the specified string.

const firstParagraph = document.getElementById('first-paragraph');
console.log(firstParagraph);

// ? Document.getElementsByClassName()
// - returns an array-like object of all child elements which have all of the given class name(s).

const listItems = document.getElementsByClassName('list-item');
console.log(listItems);

for (const property in listItems) {
  if (listItems[property].style) {
    listItems[property].style.fontStyle = 'italic';
  } else {
    // HTMLCollection also returns the item and namedItem methods
    `Property does not exist`;
    // console.log(listItems[property]);
  }
}

// ? Element.getAttribute()
// - returns the value of a specified attribute on the element.

const orderedList = document.querySelector('ol');
const orderedListAttributeValue = orderedList.getAttribute('id');
console.log(orderedListAttributeValue);

// ? Document.getElementsByName()
// - returns a NodeList Collection of elements with a given name attribute in the document.

const listOfHobbies = document.getElementsByName('hobby');
console.log(listOfHobbies);

// ? Document.getElementsByTagName()
// - returns an HTMLCollection of elements with the given tag name.

const paragraphsAgain = document.getElementsByTagName('p');
console.log(paragraphsAgain);

// * Creating and adding elements to the DOM

const newSection = document.createElement('section');

// * Adding the element to the body
// ? append() - accepts multiple arguments
// ? appendChild() - accepts only one argument
main.append(newSection);

// * Inserting HTML into document without replacing the current content of the document

newSection.insertAdjacentHTML('afterbegin', `<h2> Dynamic Element</h2>`);

// ?  Element.insertAdjacentText();

let paragraphNewSection = document.createElement('p');
newSection.insertAdjacentElement('beforeend', paragraphNewSection);
paragraphNewSection.insertAdjacentText(
  'afterbegin',
  'DOM Manipulation is amazing!'
);

// * Setting Attributes

paragraphNewSection.setAttribute(
  'title',
  'Wow! So this is how tooltips are made.'
);

// Changing style using set attribute
paragraphNewSection.setAttribute(
  'style',
  'color:red; background-color: black;'
);

// * Adding and removing classes
main.classList.add('container-flex');
main.classList.remove('container');
main.classList.toggle('container'); // toggle
main.classList.toggle('container'); // untoggle
