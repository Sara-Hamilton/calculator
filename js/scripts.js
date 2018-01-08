// var add = function(number1, number2) {
//   return number1 + number2;
// };
//
// var number1 = parseInt(prompt("Enter a number:"));
// var number2 = parseInt(prompt("Enter another number:"));
// var result = add(number1, number2);
// alert(result);

// var subtract = function(number1, number2) {
//   return number1 - number2;
// };
//
// var number1 = parseInt(prompt("Enter a number:"));
// var number2 = parseInt(prompt("Enter another number:"));
// var result = subtract(number1, number2);
// alert(result);

// var multiply = function(number1, number2) {
//   return number1 * number2;
// };
//
// var number1 = parseInt(prompt("Enter a number:"));
// var number2 = parseInt(prompt("Enter another number:"));
// var result = multiply(number1, number2);
// alert(result);

// var divide = function(number1, number2) {
//   return number1 / number2;
// };
//
// var number1 = parseInt(prompt("Enter a number:"));
// var number2 = parseInt(prompt("Enter another number:"));
// var result = divide(number1, number2);
// alert(result);

var bmi = function(height, weight) {
  return ((weight/(height*height)*703));
}

var height = parseInt(prompt("What is your height in inches?"));
var weight = parseInt(prompt("What is your weight in pounds?"));
var result = bmi(height, weight);
alert("Your BMI is " + result.toPrecision(4));
