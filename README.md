# Neighborhood

By James Provance

## Technologies Used
* HTML
* CSS
* JavaScript

## Description
A page that takes a number and generates text based off the number.

## Setup
* Open https://jb24x7.github.io/neighborhood/ in your browser.
* Imput number in form
* Submit form
* Enjoy

## Known Bugs
* There are no known bugs at the moment

## Tests
### Describe: Pizza()
* Test: "It should generate a pizza object"
* Code: Pizza("p1");
* Expected Output:  
this.name = p1;
this.toppings = [];
this.size = '';

### Describe: pizzaSize()
* Test: "It should add pizza size to object"
* Code: Pizza.pizzaSize('medium');
* Expected Output:  
this.size = 'medium';

### Describe: toppingsFnc()
* Test: "It should add toppings to object"
* Code: Pizza.toppingsFnc(['cheese', 'cheese', 'pineapple', 'pineapple']);
* Expected Output:  
this.toppings = ['cheese', 'cheese', 'pineapple', 'pineapple'];

## License

Copyright (c) 2023 James Provance