// Selectors
// Selecting elements
document.getElementsByTagName('H1'); // select element by tag name as HTML Collection
document.getElementById(); // select element by ID
document.getElementsByClassName(); // select all elements by className as HTMLCollection
document.querySelector(); // select element by CSS selectors
document.querySelectorAll(); // select all elements by CSS selectors as NodeList
const tempE1 = document.querySelector('.hero');
tempE1.innerHTML; // give inner Html
tempE1.innerText; // give inner Text
tempE1.innerContent; // give inner HTML including display: none contents
tempE1.innerContent; // give inner text
tempE1.querySelector('h1').style.color = "green"; // change color of a element

// selecting children
const parentE1 = document.querySelector('.hero');
console.log(parentE1);
parentE1.children; // give all children elements as HTMLCollection
parentE1.children[0]; // give first children
parentE1.firstElementChild; // give first children
parentE1.lastElementChild; // give last children
parentE1.nextElementSibling; // give next adjacent element
parentE1.previousElementSibling; // give previous adjacent element
parentE1.firstElementChild.parentElement; // give parent element
parentE1.childrenNodes; // give all children elements as NodeList
parentE1.childrenNodes[0]; // give first children node
parentE1.firstChild; // give first children node
parentE1.lastChild; // give last children node
parentE1.nextSibling; // give next adjacent node
parentE1.previousSibling; // give previous adjacent node
parentE1.firstChild.parent; // give parent node

// manipulating attribute
element.id // give id
element.className // give all class as string
element.classList // give all class as array list
element.classList.add("man") // add the class
element.classList.remove("man") // remove the class
element.classList.remove("man") // if exist then remove otherwise add the given class
const element = document.getElementsByTagName('h1');
element.getAttribute('class'); // give value of given attribute
element.setAttribute('class','main'); // replace and add given attribute
element.hasAttribute('class'); // return true if the attribute exists, otherwise false
element.hasAttributes(); // return true if the element has any attributes, otherwise false
element.removeAttribute('class'); // remove the attribute

// creating elements
const divE1 = document.createElement('div'); // create new element
divE1.id = "main"; // assign ID
divE1.className = "yahoo"; // assign class
// assign a text node
// divE1.innerText = "Chai aur code"; // way1
const innerText = document.createTextNode("Chai aur code"); // way2 
divE1.appendChild(innerText); // add new child node
console.log(divE1);
console.log(divE1.innerText);

// Normal function for appending a child
function addElement(innerHtml){
    const newLi = document.createElement('li');
    newLi.innerHTML = `${innerHtml}`;
    document.querySelector('ul').appendChild(newLi);
}
// Optimized function for appending a child
function addElement(innerHtml){
    const newLi = document.createElement('li');
    newLi.appendChild(document.createTextNode(innerHtml));
    document.querySelector('ul').appendChild(newLi);
}
 
// Inserting the element
node.prepend() // insert a node at the beginning
Node.appendChild() // insert a node at the end
node.before() // insert a node before the current node
node.after() // insert a node after the current node

// Replacing a element
const text = "JavaScript";
const oldElement = document.querySelector('li:nth-child(2)');
// way1 using innerHTML
oldElement.innerHTML = text;
// way2 using replaceWith
const newElement = document.createElement('li');
newElement.appendChild(document.createTextNode(text));
oldElement.replaceWith(newElement);
// way3 using outerHTML
oldElement.outerHTML = `<li>${text}</li>`;

// Removing a element using remove()
oldElement.remove();


// master
document.designMode = "on" // give allow to edit any website
<h1 data-krishu:"love"></h1> // custom attribute using (data-)

// Table

table.trows