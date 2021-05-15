function nameMenuItem(name) {
  return menuItemName = "Delicious " + name;
}

function createMenuItem(inputName, inputPrice, inputType) {
  return {
    name: inputName,
    price: inputPrice,
    type: inputType
  };
}

function addIngredients(ingredient, ingredientsList) {
  if (!ingredientsList.includes(ingredient)) {
    return ingredientsList.push(ingredient);
  }
}

function formatPrice(price) {
  return "$" + price;
}

function decreasePrice(price){
  var tenPercentDiscount = price * .10;
  return price - tenPercentDiscount;
}

function createRecipe(title, ingredients, menuItemType){
  return {
    title: title,
    ingredients: ingredients,
    type: menuItemType
  }
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
