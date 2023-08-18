// Write your code here
class Breakfast {
  constructor(food, drink) {
    this.food = food;
    this.drink = drink;
  }
}

class Lunch {
  constructor(salad, soup, drink) {
    this.salad = salad;
    this.soup = soup;
    this.drink = drink;
  }
}

class Dinner {
  constructor(salad, soup, entree, dessert) {
    this.salad = salad;
    this.soup = soup;
    this.entree = entree;
    this.#dessert = dessert;
  }
}
const breakfast1 = new Breakfast("cereal", "juice");
console.log(breakfast1); // Output: Breakfast { food: 'cereal', drink: 'juice' }

const lunch1 = new Lunch("caesar", "tomato", "water");
console.log(lunch1); // Output: Lunch { salad: 'caesar', soup: 'tomato', drink: 'water' }

const dinner1 = new Dinner("garden", "chicken noodle", "steak", "cake");
console.log(dinner1); // Output: Dinner { salad: 'garden', soup: 'chicken noodle', entree: 'steak', #dessert: 'cake' }