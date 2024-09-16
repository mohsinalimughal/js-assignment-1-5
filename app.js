// ====================================chap-2==============================================

// First alert message
alert("JavaScript Alert\n  \nError! please enter a valid password");

// Second alert message
alert("JavaScript Alert \n \nWelcome to JS land... \nHappy Coding");

// Third alert message
alert("JavaScript Alert \n \nWelcome to JS land...");

// Fourth alert message
alert("JavaScript Alert\n \n  Happy Coding\n Prevent this message from creating additional dialogues");

// Fifth alert message
console.log("JavaScript Alert\n \n Hello... I can run JS through my web browser's console");


// ========================================chap-2=====================================


// Question no: 01
var userName;

// Question no: 02
var myName = "Mohsin Ali Mughal";
console.log(myName)

// Question no: 03
var greeting = "Hello World" 
alert(greeting);

// Question no: 04
var stBio = "Jhone Doe", age = "15 years old", course = "Certified Mobile Application Development"   
alert(stBio);
alert(age);
alert(course);

// Question no: 05
var pizza = "PIZZA \nPIZZ \nPIZ \nPI \nP";
alert(pizza);

// Question no: 06
var email = "My email address is " + "Mohsinalimughal@gmail.com";
alert(email);

// Question no: 07
var book = "I am try to learn from the book " + "A smarter way to learn JavaScript";
alert(book);

//Question no: 08
document.write("Yah! I can write HTML content through JavaScript");

// Question no: 09
var  design = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"
alert(design)



// =============================================chap-3========================================



// Question no: 01
var age = "I am 20 years old";
alert(age);

// Question no: 02
var visit = "You have visited this site 14 times.";
alert(visit);

// Question no: 03
var birthYear = "My birth year is 2004";
document.write("<br>");
document.write(birthYear);
document.write("<br>");
document.write("Data type of my declared variable is number");
document.write("<br>");
document.write("<br>");

// Question no: 04
var visitorName =  "John Doe"
var product = "5 T-shirt"
var Quantity = "(s) on XYZ Clothing store"
document.write(visitorName + " ordered " + product + Quantity)


// ====================================chap-4============================================


// Question no: 01
var a = 1, b = 2, c = 3;

// Question no: 02
// five legal variable naam

// var firstName;
// var lastName;
// var age;
// var findEvenNumber;
// var number1;

// five illegal variable naam

// var first-name;
// var last name;
// var 2number;
// var const;
// var function;

// Question no: 03

document.write("<h2>Rules for naming JS variables</h2>")
var sign =  "Variable names can only contain ,numbers, $ and _ . For example $my_1stVariable"
document.write(sign);
document.write("<br>")

var letter = "Variables must begin with a letter, $ or _ . For example $name, _name or name"
document.write(letter);
document.write("<br>")

var caseSensitive = "Variable names are case sensitive "
document.write(caseSensitive);
document.write("<br>")

document.write("Variable names should not be JS keywords");
document.write("<br>")
document.write("<br>")



// ===========================================chap-5=========================================


// Question no: 01

var num1 = 5;
var num2 = 6;
var sumNumber = num1 + num2;
document.write("Sum of " + num1 + " and " + num2 + " is " + sumNumber);
document.write("<br>")
document.write("<br>")

// Question no: 02
var num1 = 5;
var num2 = 6;
var sumNumber = num1 - num2;
document.write("Subtraction of " + num1 + " and " + num2 + " is " + sumNumber);
document.write("<br>")
document.write("<br>")
var num1 = 5;
var num2 = 6;
var sumNumber = num1 * num2;
document.write("Multiplication of " + num1 + " and " + num2 + " is " + sumNumber);
document.write("<br>")
document.write("<br>")
var num1 = 5;
var num2 = 6;
var sumNumber = num1 / num2;
document.write("Division of " + num1 + " and " + num2 + " is " + sumNumber);
document.write("<br>")
document.write("<br>")
var num1 = 5;
var num2 = 6;
var sumNumber = num1 % num2;
document.write("Modulus of " + num1 + " and " + num2 + " is " + sumNumber);
document.write("<br>")
document.write("<br>")
document.write("<br>")

// Question no: 3

var num =  "undefined";
var math = "Value after variable declaration is: " + num; 
document.write(math)
document.write("<br>")

var initial =  5;
var value = "Initial value: " + initial
document.write(value)
document.write("<br>")

var increment = ++initial   
document.write("Value after increment is: " + increment)
document.write("<br>")

var adddition = initial + 7 ; 
document.write("Value after addition is: " + adddition)
document.write("<br>")

var decrement = --adddition;
document.write("Value after decrement is: " + decrement)
document.write("<br>")

var outPut =   decrement % 3
document.write("The remainder is : " + outPut)
document.write("<br>")
document.write("<br>")
document.write("<br>")

// Question no: 4

var ticketPRK = 600;
var quantityOfTicket = 5;
document.write("Totol cost to buy " + quantityOfTicket + " tickets to a movie is " + (ticketPRK * quantityOfTicket) + "PRK")  
document.write("<br>")
document.write("<br>")

// Question no: 5

var num = 4;
var table = "<h2>Table of " + num + "</h2>";
table += num + " x 1 = " + (num * 1) + "<br>";
table += num + " x 2 = " + (num * 2) + "<br>";
table += num + " x 3 = " + (num * 3) + "<br>";
table += num + " x 4 = " + (num * 4) + "<br>";
table += num + " x 5 = " + (num * 5) + "<br>";
table += num + " x 6 = " + (num * 6) + "<br>";
table += num + " x 7 = " + (num * 7) + "<br>";
table += num + " x 8 = " + (num * 8) + "<br>";
table += num + " x 9 = " + (num * 9) + "<br>";
table += num + " x 10 = " + (num * 10) + "<br>";
document.write(table)
document.write("<br>");
document.write("<br>");

// Question no: 7

document.write("<h1>Shopping Cart</h1>")
    var item1 = 3;
var price1 = 650
var totalPriceAndItem = price1 * item1
document.write("Price of item 1 is " + totalPriceAndItem )
document.write("<br>")

document.write("Quantity of item 1 is " + item1)
document.write("<br>")

var price2 = 100;
var item2 = 7;
var totalPriceAndItem1 = price2 * item2
document.write("Price of item 2 is " + totalPriceAndItem1)
document.write("<br>")

document.write("Quantity of item 2 is " + item2)
document.write("<br>")
document.write("<br>")

var shipping = "Shipping charges 100"
var  totalCost = totalPriceAndItem + totalPriceAndItem1 + 100
document.write("Total cost of your order is " + totalCost)
document.write("<br>")
document.write("<br>")

// Question no: 8

document.write("<h2>Marks Sheet</h2>"); 
var totalMarks = 980;
document.write("Total marks: " + totalMarks);
document.write("<br>")
var obtainedMarks = 804;
document.write("Marks obtained: " + obtainedMarks);
document.write("<br>")
var precentage = obtainedMarks * 100 / totalMarks ;
document.write("Percentage: "+precentage);
document.write("<br>")
document.write("<br>")

// Question no: 9
document.write("<h1>Currency in PKR</h1>"); 
var dollar = 10;
var dollarPRK = 104.80;
var riyal = 25;
var riyalPRK = 28;

var dollarConvertToPak = dollar * dollarPRK
var riyalConvertToPak = riyal * riyalPRK

var totalCurrencyInPak = dollarConvertToPak + riyalConvertToPak; 
document.write("Total currency in PKR: " + totalCurrencyInPak);
document.write("<br>")
document.write("<br>")

// Question no: 10

var arithmetic = (((10 + 5) * 10) / 2)
document.write("Arithmetic Expression " + arithmetic)
document.write("<br>")
document.write("<br>")


// Question no: 11
document.write("<h1>Age Calculator</h1>"); 
var currentYear = 2016;
document.write("Current Year " + currentYear)
document.write("<br>")
var  birthYear = 1992;
document.write("Birth Year " + birthYear)
document.write("<br>")
var yourAge = currentYear - birthYear;
document.write("Your Age is " + yourAge);
document.write("<br>");
document.write("<br>");

// Question no: 13
document.write("<h1>The Lifetime Supply Calculator</h1>"); 
var favoriteSnack = "chocolate chip"
document.write("Favorite Snack: " + favoriteSnack);
document.write("<br>");

var currentAge = 15
document.write("Current Age: " + currentAge);
document.write("<br>");

var maximumAge = 65;
document.write("Estimated Maximum Age: " + maximumAge);
document.write("<br>");

document.write("Amount of snacks per day: " + 3);
document.write("<br>");

document.write("You will need 150 chocolate chip to last you until the ripe old age of " + maximumAge);
document.write("<br>");
document.write("<br>");