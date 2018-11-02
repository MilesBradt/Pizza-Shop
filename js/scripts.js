function Customer(name, number, total) {
  this.name = name,
  this.number = number,
  this.total = total
}

function Pizza(toppings, size, price = 7) {
  this.toppings = [],
  this.size = size,
  this.price = price
}

Pizza.prototype.addToppings = function(topping){
  this.toppings.push(topping)
}

Pizza.prototype.determinePrice = function() {
  var newPrice = this.price
  for (var i = 0; i < this.toppings.length; i++) {
    if (this.toppings[i] === "pepperoni") {
      newPrice += 1;
    }
  }
  return newPrice;
}

var newCustomer = new Customer();
var newPizza = new Pizza();

$(document).ready(function() {

});
