function Pizza(pizzaName) {
  this.pizzaName = pizzaName;
  this.toppings = [];
  this.size = size;
  this.pizzaPrice = 0;
};


Pizza.prototype.price = function () {
  let cost = 0;
  if (this.size === 'small') {
    cost = 6 + (this.toppings.length * 0.5)
  } else if (this.size === 'medium') {
    cost = 9 + (this.toppings.length * 0.5)
  } else {
    cost = 12 + (this.toppings.length * 0.5)
  };
  this.pizzaPrice = cost
};

Pizza.prototype.toppingsFnc = function (selectedToppings) {
  selectedToppings.forEach(topping => {
    if (topping !== 'no') {
      this.toppings.push(topping);
    };
  });
};

Pizza.prototype.pizzaSize = function () {
  if (size[size.selectedIndex].value !== 'no') {
    this.size = size[size.selectedIndex].value;
  };
};

function showPizza (pizza, p) {
  p.innerText = pizza.size + ' ' + pizza.toppings.join(', ') + ' ' + pizza.pizzaPrice
}

document.getElementById("submit").onclick = function () {
  let t1 = document.getElementById("toppings1");
  let t2 = document.getElementById("toppings2");
  let t3 = document.getElementById("toppings3");
  let t4 = document.getElementById("toppings4");
  let size = document.getElementById("size");
  let p = document.getElementById("what-pizza")
  let toppings = [t1[t1.selectedIndex].value, t2[t2.selectedIndex].value, t3[t3.selectedIndex].value, t4[t4.selectedIndex].value]
  let pizza1 = new Pizza('pizza 1');

  pizza1.toppingsFnc(toppings)
  pizza1.pizzaSize(size)
  pizza1.price()
  console.log(pizza1)
  showPizza(pizza1, p)

}