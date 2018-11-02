function Customer(name, number, total) {
  this.name = name,
  this.number = number,
  this.total = total
}

function Pizza(toppings, size, price = 0) {
  this.toppings = [],
  this.size = size,
  this.price = price
}

Pizza.prototype.addToppings = function(topping) {
  var splitToppings = topping.split(" ")
  this.toppings.push(splitToppings)
}

Pizza.prototype.addSize = function(size) {
  this.size = size
}

Pizza.prototype.determinePrice = function() {
  var newPrice = this.price
  if (this.size === "medium") {
    newPrice += 7
  } else if (this.size === "large") {
    newPrice += 10
  }
  var currentToppings = this.toppings[0];
  for (var i = 0; i < currentToppings.length; i++) {
    if (currentToppings[i] === "pepperoni") {
      newPrice += 1
    }
    else if (currentToppings[i] === "onion") {
      newPrice += 1
    }
    else if (currentToppings[i] === "mushroom") {
      newPrice += 2
    }
  }
  return newPrice
}

var newCustomer = new Customer();
var newPizza = new Pizza();

$(document).ready(function() {

});
