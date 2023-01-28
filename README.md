# Pizza

By James Provance

## Technologies Used
* HTML
* CSS
* JavaScript

## Description
A page that lets input what type of pizza yuo would like to order.

## Setup
* Open https://jb24x7.github.io/pizza/ in your browser.
* Fill out you order
* Submit
* Enjoy
* OR
* Clone this repository
* Launch index.html
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
MIT License

Copyright (c) 2023 James Provance

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.