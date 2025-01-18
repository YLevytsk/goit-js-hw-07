
const categoriesList = document.querySelector('#categories');

if (categoriesList) {

  const categoryItems = categoriesList.querySelectorAll('.item');
  console.log(`Number of categories: ${categoryItems.length}`);

  
  categoryItems.forEach((category) => {
    
    const categoryTitle = category.querySelector('h2')?.textContent;

   
    const elementsCount = category.querySelectorAll('ul li').length;

    console.log(`Category: ${categoryTitle}`);
    console.log(`Elements: ${elementsCount}`);
  });
} else {
  console.error('Element with ID "categories" not found.');
}

