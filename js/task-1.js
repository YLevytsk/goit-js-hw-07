
const categories = document.querySelectorAll('#categories .item');

console.log(`Количество категорий: ${categories.length}`);

categories.forEach(category => {
  
  const categoryName = category.querySelector('h2').textContent;

 
  const subcategoryCount = category.querySelectorAll('ul li').length;

  
  console.log(`Категория: ${categoryName}`);
  console.log(`Количество элементов в категории: ${subcategoryCount}`);
});
