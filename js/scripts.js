function Pizza(pizza) {
  this.pizza = pizza;
  this.toppings = [];
  this.size = '';
  this.price = 0;
};


Pizza.prototype.totalPrice = function () {
  let cost = 0;
  if (this.size === 'small') {
    cost = 6 + (this.toppings.length * 0.5)
  } else if (this.size === 'medium') {
    cost = 9 + (this.toppings.length * 0.5)
  } else {
    cost = 12 + (this.toppings.length * 0.5)
  };
  this.price = cost
};

