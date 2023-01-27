function Pizza(pizza) {
  this.pizza = pizza;
  this.toppings = [];
  this.size = '';
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

Pizza.prototype.toppingsFnc = function () {
  topping.forEach(element => {
    i = 0;
    if(!topping[i] === 'no') {
      this.toppings.push(topping[i]);
    };
  });
};


document.getElementById("submit").onclick = function() {

  let t1 = document.getElementById("toppings1");
  let t2 = document.getElementById("toppings2");
  let t3 = document.getElementById("toppings3");
  let t4 = document.getElementById("toppings4");
  let topping = [t1[t1.selectedIndex],t2[t2.selectedIndex],t3[t3.selectedIndex],t4[t4.selectedIndex]]

}