function Customer(name, number) {
  this.name = name,
  this.number = number
}

function Pizza(toppings, size, price = 0) {
  this.toppings = [],
  this.size = size,
  this.price = price
}

Pizza.prototype.addToppings = function(topping) {
  var splitToppings = topping.split(" ")
  for (var i = 0; i < splitToppings.length; i++) {
    if (splitToppings[i] === "undefined") {
      delete splitToppings[i]
    }
  }
  return this.toppings.push(splitToppings)
}

Pizza.prototype.addSize = function(size) {
  this.size = size
}

Pizza.prototype.determinePrice = function() {
  var newPrice = this.price
  var currentToppings = this.toppings[0]
  if (this.size === "Medium") {
    newPrice += 7.99
  } else if (this.size === "Large") {
    newPrice += 10.99
  }
  for (var i = 0; i < currentToppings.length; i++) {
    if (currentToppings[i] === "pepperoni") {
      currentToppings[i] = "<li>" + "Pepperoni"
      newPrice += 1.50
    }
    else if (currentToppings[i] === "onion") {
      currentToppings[i] = "<li>" + "Onion"
      newPrice += 1.25
    }
    else if (currentToppings[i] === "mushroom") {
      currentToppings[i] = "<li>" + "Mushroom"
      newPrice += 2.00
    }
  }
  return newPrice
}

var newCustomer = new Customer()
var newPizza = new Pizza()

$(document).ready(function() {
  $("#userPizza").submit(function(event) {
    event.preventDefault();

    newPizza.addSize($("input[name=size]:checked").val());
    newPizza.addToppings($("input[id='pepperoni']:checked").val() + " " + $("input[id='onion']:checked").val() + " " + $("input[id='mushroom']:checked").val());

    $("#userSize").text(newPizza.size);
    $("#userTotal").text(newPizza.determinePrice());
    $("ul#userToppings").prepend(newPizza.toppings[0].join(" ") + "</li>");

    $(".output").fadeIn(500, "linear");
    $("#redo").fadeIn(500, "linear");
    $("#userPizza").hide();
  });

  $("#redo").click(function() {
    document.location.reload()
  });

});
