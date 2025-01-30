// Menu data structure
// [] means array {} means JSON (JavaScript Object Notation) objects or just objects
// menuLinks variable is an array of objects.
// JSON is a data format that follows a key/value pair. ex: Key is 'text', and the value is 'about'
var menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
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



