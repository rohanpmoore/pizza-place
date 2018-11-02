function Pizza(baseValue) {
  this.cost = 8;
  this.baseValue = "";
  switch(baseValue) {
    case "s":
      this.baseValue = "small";
      break;
    case "m":
      this.baseValue = "medium";
      this.cost += 2;
      break;
    case "l":
      this.baseValue = "large";
      this.cost += 4;
      break;
    case "xl":
      this.baseValue = "extra large";
      this.cost += 6;
      break;
  }
  this.toppingList = [];
}

Pizza.prototype.addTopping = function(topping) {
  (this.toppingList).push(topping);
  switch(topping) {
    case "pepperoni":
      this.cost += 2;
      break;
    case "pineapple":
      this.cost += 3;
      break;
    case "sausage":
      this.cost += 2;
      break;
    case "mushroom":
      this.cost += 2;
      break;
    case "onion":
      this.cost += 1;
      break;
    case "bacon":
      this.cost += 2;
      break;
    case "olive":
      this.cost += 1;
      break;
  }
}

Pizza.prototype.toString = function() {
  var output = "You ordered a ";
  output += this.baseValue;
  output += " pizza";
  for(var i = 0; i < (this.toppingList).length; i++) {
    if(i === 0) {
      output += " with ";
    }
    if(i === (this.toppingList).length - 1 && i != 0) {
      output += "and ";
    }
    output += (this.toppingList)[i];
    if(i != (this.toppingList).length - 1) {
      if((this.toppingList).length === 2) {
        output += " ";
      } else {
        output += ", ";
      }
    }
  }
  output += ". Your total today will be $";
  output += (this.cost).toString();
  return output;
}

$(document).ready(function() {
  $("#pizzaForm").submit(function(event) {
    event.preventDefault();
    var size = $("#size").val();
    var myPizza = new Pizza(size);
    $("input:checkbox[name=toppings]:checked").each(function() {
      var topping = $(this).val();
      myPizza.addTopping(topping);
    })
    $("#pizzaOutput").text(myPizza.toString());
    $("#pizzaForm").hide();
    $("#back").show();
  });
  $("#back").click(function() {
    $("#pizzaOutput").text("");
    $("#pizzaForm").show();
    $("#back").hide();
  })
});
