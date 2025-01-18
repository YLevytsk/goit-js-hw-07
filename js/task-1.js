
// Находим список категорий по ID
const categoriesList = document.querySelector('#categories');

// Считаем количество категорий (элементов li с классом item)
const categoryItems = categoriesList.querySelectorAll('.item');
console.log(`Number of categories: ${categoryItems.length}`);

// Перебираем каждую категорию и выводим данные
categoryItems.forEach((category) => {
  // Находим заголовок h2 внутри категории
  const categoryTitle = category.querySelector('h2').textContent;

  // Считаем количество элементов в подсписке ul внутри категории
  const elementsCount = category.querySelectorAll('ul li').length;

  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${elementsCount}`);
});
