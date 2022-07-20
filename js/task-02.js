const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector("#ingredients");
const elements = []

ingredients.forEach(element => {
  const newItem = document.createElement('li');
  newItem.textContent = element;
  newItem.classList.add('item');
  elements.push(newItem);
});
list.append(...elements);

