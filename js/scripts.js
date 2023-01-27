function Pizza(pizzaName) {
  this.pizza = pizzaName;
  this.toppings = [];
  this.size = size;
  this.price = 0;
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
  this.price = cost
};

Pizza.prototype.toppingsFnc = function (topping) {
  let topping = [t1[t1.selectedIndex].value, t2[t2.selectedIndex].value, t3[t3.selectedIndex].value, t4[t4.selectedIndex].value]
  this.toppings = topping
  topping.forEach(element => {
    i = 0;
    if (!topping[i] === 'no') {
    };
  });
  console.log(topping)
};

Pizza.prototype.pizzaSize = function () {
  let size = document.getElementById("size");
  this.size = size[size.selectedIndex].value;
};

// function showPizza (pizza) {
//   let p = document.createElement("p");
//   p.innerText = 
// }

document.getElementById("submit").onclick = function () {
  let t1 = document.getElementById("toppings1");
  let t2 = document.getElementById("toppings2");
  let t3 = document.getElementById("toppings3");
  let t4 = document.getElementById("toppings4");
  let pizza1 = new Pizza('pizza 1');

  pizza1.toppingsFnc(topping)
  pizza1.pizzaSize()
  console.log(pizza1)

}