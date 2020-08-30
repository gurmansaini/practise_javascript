//1.Ways to print javascript
//console.log("Hello World");
//alert("me");
//document.write("this is gurman");

//2.Javascript console API
/*console.log("hello people!", 22 + 1, "is my age ");
console.warn(
  "Its a warning, dont ignore it otherwise you will have to handle drama later"
);
console.error(
  "this is an error, but its ok we all make errors and learn, bcz we are humans"
);*/

/* 
hack: In VS code we can comment multiple lines by selecting them and press (ctrl+/) 
*/

/* 3. Javascript Variables
What are Variables?- Containers to store data values
*/

var number1 = 20;
var number2 = 50;
// console.log(number1 + number2);

//Data types in JS
//Numbers

var num1 = 455;
var num2 = 33.88;

//Strings
var str1 = "Oh man, this is string";
var str2 = "This is also String!!!!!!!!!!!!!!!!!!!";

//Objects
var marks = {
  Gaurav: 29,
  Lilly: 98,
  Harman: 67.998,
};
// console.log(marks);

//Booleans
var a = true;
var b = false;
// console.log(a, b);

//var und = undefined;
var und;
// console.log(und);

//Null
var n = null;
// console.log(n);

//Arrays
var arr = [1, 2, 3, 4, 5];
var arr1 = [1, 2, "lilly", 4, 5];

// console.log(arr);
// console.log(arr1);

//Operators in Js
//Arithmetic operators
var a = 20;
var b = 4;
// console.log("the value of a+b is", a + b);
// console.log("the value of a-b is", a - b);
// console.log("the value of a*b is", a * b);
// console.log("the value of a/b is", a / b);

//Assignment Operators
var c = b;
// c += 2;
// c -= 2;
// c *= 2;
// c /= 2;
// console.log(c);

//Comparison Operator
var x = 34;
var y = 56;
// console.log(x == y);
// console.log(x >= y);
// console.log(x <= y);
// console.log(x < y);
// console.log(x > y);

//Logical Operators
//Logical And

// console.log(true && true);
// console.log(false && true);
// console.log(true && false);
// console.log(false && false);

// //Logical Or
// console.log(true || true);
// console.log(false || true);
// console.log(true || false);
// console.log(false || false);

//Logical Not
// console.log(!false);
// console.log(!true);

//Function
//DRY=Do not repeat yourself
/*
//Example1
function avg(a, b) {
  return (a + b) / 2;
}
c1 = avg(4, 6);
c2 = avg(20, 7);
console.log(c1, c2);


//Example2
function avg(a, b) {
  c = (a + b) / 2;
  return c;
}
c1 = avg(10, 6);
c2 = avg(20, 17);
console.log(c1, c2);
*/

//Conditionals in JS
