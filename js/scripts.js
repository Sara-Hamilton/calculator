var add = function(number1, number2) {
  return number1 + number2;
};

// var number1 = parseInt(prompt("Enter a number:"));
// var number2 = parseInt(prompt("Enter another number:"));
// var result = add(number1, number2);
// alert(result);

var subtract = function(number1, number2) {
  return number1 - number2;
};

// var number1 = parseInt(prompt("Enter a number:"));
// var number2 = parseInt(prompt("Enter another number:"));
// var result = subtract(number1, number2);
// alert(result);

var multiply = function(number1, number2) {
  return number1 * number2;
};

// var number1 = parseInt(prompt("Enter a number:"));
// var number2 = parseInt(prompt("Enter another number:"));
// var result = multiply(number1, number2);
// alert(result);

var divide = function(number1, number2) {
  return number1 / number2;
};

// var number1 = parseInt(prompt("Enter a number:"));
// var number2 = parseInt(prompt("Enter another number:"));
// var result = divide(number1, number2);
// alert(result);

$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var result = add(number1, number2);
    $("#addOutput").text(result);
  });

  $("form#subtract").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#subtract1").val());
    var number2 = parseInt($("#subtract2").val());
    var result = subtract(number1, number2);
    $("#subtractOutput").text(result);
  });

  $("form#multiply").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#multiply1").val());
    var number2 = parseInt($("#multiply2").val());
    var result = multiply(number1, number2);
    $("#multiplyOutput").text(result);
  });

  $("form#divide").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#divide1").val());
    var number2 = parseInt($("#divide2").val());
    var result = divide(number1, number2);
    $("#divideOutput").text(result);
  });
});


// var bmi = function(height, weight) {
//   return ((weight/(height*height)*703));
// }
//
// var height = parseInt(prompt("What is your height in inches?"));
// var weight = parseInt(prompt("What is your weight in pounds?"));
// var result = bmi(height, weight);
// alert("Your BMI is " + result.toPrecision(4));

// var temp_convert = function(celsius){
//   return (celsius * 1.8) + 32;
// };
//
// var celsius = prompt("Enter your tempurature in celsius");
// var result = temp_convert(celsius);
//
// alert(result + " degrees fahrenheit");
