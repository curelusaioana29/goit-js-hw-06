const ingredients = [
  "potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatoes",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.getElementById('ingredients');

const fragment = document.createDocumentFragment();

ingredients.forEach((ingredient) => {
 const liElement = document.createElement('li');
 liElement.textContent = ingredient; 
 liElement.classList.add('item'); 
 fragment.appendChild(liElement); 
});

ingredientsList.appendChild(fragment);
