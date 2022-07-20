const categoriesNames = document.querySelectorAll("h2");
const elements = document.querySelectorAll('.item>ul');

console.log('Number of categories: ' + (document.querySelectorAll('.item').length));

for (let i=0; i<categoriesNames.length;i++){
console.log(`
Category: ${categoriesNames[i].textContent} 
Elements: ${elements[i].children.length}`);
}