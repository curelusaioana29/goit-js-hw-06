// Get the ul#categories element
const categoriesList = document.getElementById('categories');

// Get all the li.item elements within the ul#categories
const categoryItems = categoriesList.querySelectorAll('li.item');

// Count and display the total number of categories
console.log(`Number of categories: ${categoryItems.length}`);

// Loop through each category item and display its title and element count
categoryItems.forEach((categoryItem) => {
  // Get the title of the category (the content of the <h2> tag)
  const categoryTitle = categoryItem.querySelector('h2').textContent;

  // Get all the <li> elements within the current category
  const categoryElements = categoryItem.querySelectorAll('li');

  // Display the category title and element count
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryElements.length}`);
  console.log(); // Add a newline for better readability
});
