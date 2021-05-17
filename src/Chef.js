class Chef {
  constructor(name, restaurant) {
    this.name = name;
    this.restaurant = restaurant;
  }

  greetCustomer(customerName, isMorning) {
    if (isMorning === true) {
      return `Good morning, ${customerName}!`;
    } else {
        return `Hello, ${customerName}!`;
    }
  }

  checkForFood(itemToCheck) {
    var itemMenu = itemToCheck.type;
    var restaurant = this.restaurant;
    for (var i = 0; i < restaurant.menus[itemMenu].length; i++) {
      if (itemToCheck.name === restaurant.menus[itemMenu][i].name) {
        return `Yes, we're serving ${itemToCheck.name} today!`;
      }
    }
    return `Sorry, we aren't serving ${itemToCheck.name} today.`
  }
}


module.exports = Chef;
