const ingredients = [
  "potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatoes",
  "Herbs",
  "Condiments",
];

// Get the ul#ingredients element
const ingredientsList = document.getElementById('ingredients');

// Create a DocumentFragment to hold the <li> elements
const fragment = document.createDocumentFragment();

// Loop through the ingredients array and create <li> elements
ingredients.forEach((ingredient) => {
 const liElement = document.createElement('li');
 liElement.textContent = ingredient; // Set text content
 liElement.classList.add('item'); // Add the "item" class
 fragment.appendChild(liElement); // Append the <li> element to the fragment
});

// Append all <li> elements to the ul#ingredients list in one operation
ingredientsList.appendChild(fragment);
