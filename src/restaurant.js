function createRestaurant(inputName) {
  return {
    name: inputName,
    menus: {
      breakfast:[],
      lunch:[],
      dinner:[]
    }
  }
}

function addMenuItem(restaurant, newMenuItem) {
  if(newMenuItem.type === "breakfast" && restaurant.menus.breakfast.includes(newMenuItem) !== true) {
      restaurant.menus.breakfast.push(newMenuItem);
  } else if(newMenuItem.type === "lunch" && restaurant.menus.lunch.includes(newMenuItem) !== true) {
    restaurant.menus.lunch.push(newMenuItem);
  } else if(newMenuItem.type === "dinner" && restaurant.menus.dinner.includes(newMenuItem) !== true) {
    restaurant.menus.dinner.push(newMenuItem);
  }
}

function removeMenuItem(restaurant, menuItemName, menuType) {
  var chosenMenuArray = restaurant.menus[menuType.toString()];
  for(i = 0; i < chosenMenuArray.length; i ++) {
    if (chosenMenuArray[i].name === menuItemName) {
      chosenMenuArray.splice(i, 1)
      return `No one is eating our ${menuItemName} - it has been removed from the ${menuType} menu!`;
    }
  }
  return `Sorry, we don't sell ${menuItemName}, try adding a new recipe!`
}


module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
