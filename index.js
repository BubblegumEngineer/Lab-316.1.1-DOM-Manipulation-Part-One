// Menu data structure
// [] means array {} means JSON (JavaScript Object Notation) objects or just objects
// menuLinks variable is an array of objects.
// JSON is a data format that follows a key/value pair. ex: Key is 'text', and the value is 'about'
var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];

console.log("Part 1: Getting Started");
console.log("================================");

// Step 1: Select and cache (a.k.a. save) the <main> element
const mainEl = document.querySelector("main"); // this is the HTML tag called <main><main/> found in the html file.
console.log(mainEl);

// Step 2: Set the background color to the value of the --main-bg CSS custom property
// Hint: Assign a string that uses the CSS var() function like this: 'var(--main-bg)'.
mainEl.style.backgroundColor = "var(--main-bg)";
console.log(mainEl.style.backgroundColor);

// Step 3: Set the content of mainEl to <h1>DOM Manipulation</h1>
//you can do it like this :
// mainEl.innerHTML = '<h1>DOM Manipulation</h1>';
// OR:

const h1 = document.createElement("h1");
h1.textContent = "DOM Manipulation";
mainEl.appendChild(h1);
console.log(mainEl.appendChild(h1));

// Step 4: Add a class of flex-ctr to mainEl.
//Hint: Use the Element.classList API.
mainEl.classList.add("flex-ctr");
// console.log(mainEl.classList.add('flex-ctr')); you can't console log a class, its not a value.

console.log("Part 2: Creating a Menu Bar");
console.log("================================");

// Next, create a blank menu bar that we can use to later add some interactivity to the page:

// 1. Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.

const topMenuEl = document.querySelector("#top-menu");
console.log(topMenuEl);

// 2. Set the height of the topMenuEl element to be 100%.

topMenuEl.style.height = "100%";
console.log(topMenuEl.style.height);
// 3. Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.

topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
console.log(topMenuEl.style.backgroundColor);
// 4. Add a class of flex-around to topMenuEl.

topMenuEl.classList.add("flex-around");



console.log("Part 3: Adding Menu Buttons");
console.log("================================");

//To continue:

// 1. Iterate over the entire menuLinks array and for each "link" object:

for (let link of menuLinks) {
  // 2. Create an <a> element:
  let anchor = document.createElement("a");

  // 3. On the new element, add an href attribute with its value set to the href property of the "link" object.
  anchor.href = link.href;
  
  // 4. Set the new element's content to the value of the text property(or key) of the "link" object.
  anchor.textContent = link.text;
  
  // 5. Append the new element to the topMenuEl element.
  topMenuEl.appendChild(anchor);
  console.log(topMenuEl.appendChild(anchor));

} // end of for of loop

console.log("Part 4: Adding Interactivity");
console.log("================================");



console.log("LAB 316.3.1: DOM Manipulation (Part Two)");
console.log("=====================================");

console.log("Part 3: Creating the Submenu");
console.log("=====================================");

//We will start by using some DOM manipulation techniques to format the submenu before adding interaction to each menu component.
//All future steps should be completed within the index.js file.


// 1. Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.
const subMenuEl = document.querySelector("#sub-menu");
console.log(subMenuEl);


// 2. Set the height subMenuEl element to be "100%".
subMenuEl.style.height = "100%";
console.log(subMenuEl.style.height);


// 3. Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
console.log(subMenuEl.style.backgroundColor);


// 4. Add the class of flex-around to the subMenuEl element.
subMenuEl.classList.add("flex-around");

// Now, change the position of the submenu to temporarily hide it. Later, we will make the submenu appear dynamically based on user interaction:

// 1. Set the CSS position property of subMenuEl to the value of absolute.
subMenuEl.style.position = "absolute";

// 2. Set the CSS top property of subMenuEl to the value of 0.
subMenuEl.style.top = "0";

console.log("=====================================");
console.log("Part 4: Adding Menu Interaction");
console.log("=====================================");

//In order to add interaction:
// 1. Select and cache (save) the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.
// This created an array called topMenuLinks by taking the reference of the "a" elements from the topMenuEL elements. (this is not hard coded)
const topMenuLinks = topMenuEl.querySelectorAll("a"); 
console.log(topMenuLinks);

// 2. Attach a delegated 'click' event listener to topMenuEl.
// the "click" tells the addEventListener what to listen for and the 'handleMenuClick' is a created name for a function that says what will happen when "click" even happens. When the first part of the parentheses happens, the second part will be called.
topMenuEl.addEventListener("click",handleMenuClick); 

// - The first line of code of the event listener function should call the event object's preventDefault() method.

// -The second line of code of the function should immediately return if the element clicked was not an <a> element.

function handleMenuClick(event) { //passing the event object
  event.preventDefault(); // preventing a default behavior for that event.
  if (event.target.tagName !== "A") { //when checking for a tag name the tag needs to be an UpperCase letter
    return;
  }
  
  // -Log the content of the <a> to verify the handler is working.
  console.log(event.target.textContent); // this displays only the text.
   //console.log(event.target); // this displays the whole href.
}

