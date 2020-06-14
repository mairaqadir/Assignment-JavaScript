// Assignment # 1:-

// Q1)
alert("Assalam-o-alikum!")

// Q2)
alert("Error! Please enter a valid password.")

// Q3)
alert("Welcome to JS Land...\nHappy Coding!")

// Q4)
alert("Welcome to JS Land...")
alert("Happy Coding!")

// Q5)
console.log("Hello...I can run JS through my web browser's console")





// Assignment # 2:-

// Q1)
var username

// Q2)
var myName = ("Syed Muhammad Mooazam")

// Q3)
var message = ("Hello World")
alert(message)

// Q4)
var name = ("Jhone Doe")
var age = ("15 years old")
var certification = ("Certified Mobile Application Development")
alert(name)
alert(age)
alert(certification)

// Q5)
var a = ("PIZZA")
alert("PIZZA\nPIZZ\nPIZ\nPI\nP")

// Q6)
var email = ("example@example.com")
alert("My email address is " + email)

// Q7)
var book = ("A smarter way to learn JavaScript")
alert("I am trying to learn from the Book " + book)

// Q8)
document.write("Yah! I can write HTML content through JavaScript", "<br>")

// Q9)
var pattern = ("▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬")
alert(pattern)
document.write(pattern)





// Assignment # 3:-

// Q1)
var age = (19)
alert("I am " + age + " years old")

// Q2)
var track = (14)
alert("You have visited this site " + track + " times.")

// Q3)
var birthYear = (2001)
document.write("<br><br>" + "My birth year is " + birthYear + "<br>" + "Data type of my declared variable is number")

// Q4)
var name = ("John Doe").bold()
var product = ("T-Shirts(s)").bold()
var quantity = ("5").bold()
document.write("<br>" + name + " ordered " + quantity + " " + product + " on XYZ Clothing store" + "<br><br>")





// Assignment # 4:-

// Q1)
var a, b, c;

// Q2)
var a, b, c, d, e;      //Legal
// var 1a,? b, !c, "d,-e;  //Illegal

// Q3)
var heading = ("Rules for naming JS variables" + "<br>").bold()
document.write(heading)
document.write("<br>" + "Variable names can only contain, numbers, $ and _. For example $my_1stVariable")
document.write("<br>" + "Variables must begin with a letter, $, or _. For example $name, _name or name")
document.write("<br>" + "Variable names are case sensitive")
document.write("<br>" + "Variable names should not be JS keywords" + "<br><br>")





// Assignment # 5:-

// Q1)
var num1 = 3
var num2 = 5
document.write("Sum of " + num1 + " and " + num2 + " is " + (num1 + num2))

// Q2)
var num1 = 3
var num2 = 5
document.write("<br>" + "Subtraction of " + num1 + " and " + num2 + " is " + (num1 - num2))
document.write("<br>" + "Multiplication of " + num1 + " and " + num2 + " is " + (num1 * num2))
document.write("<br>" + "Division of " + num1 + " and " + num2 + " is " + (num1 / num2))
document.write("<br>" + "Modulus of " + num1 + " and " + num2 + " is " + (num1 % num2))

// Q3)
var number
document.write("<br>" + "<br>" + "Value after variable declaration is " + number)
number = 5
document.write("<br>" + "Initial value: " + number)
document.write("<br>" + "Value after increment is: " + ++number)
var number1 = number + 7
document.write("<br>" + "Value after addition is: " + number1)
document.write("<br>" + "Value after decrement is: " + --number1)
document.write("<br>" + "The remainder is: " + number1 % 3)

// Q4)
var cost = 600
var ticket = 5
document.write("<br>" + "The cost to buy " + ticket + " tickets to a movie is " + cost * ticket + "PKR")

// Q5)
var i
document.write("<br>" + "<br>" + "Table of 4" + "<br>")
for (i = 1; i <= 10; i++) {
    document.write("4x" + i + "=" + 4 * i + "<br>")
}

// Q6)
var celsius = 25
document.write("<br>" + celsius + "°C is " + ((celsius * 9 / 5) + 32) + "°F")
var fahrenheit = 70
document.write("<br>" + fahrenheit + "°F is " + (fahrenheit - 32) * 5 / 9 + "°C")

// Q7)
document.write("<br>" + "<br>" + "Shopping Cart" + "<br>")
var pi1 = 650, pi2 = 100, oi1 = 3, oi2 = 7, sc = 100
document.write("<br>" + "Price of item 1 is " + pi1)
document.write("<br>" + "Ordered quantity of item 1 is " + oi1)
document.write("<br>" + "Price of item 2 is " + pi2)
document.write("<br>" + "Ordered quantity of item 2 is " + oi2)
document.write("<br>" + "Shiping charges " + sc)
document.write("<br>" + "<br>" + "Total cost of your order is " + ((pi1 * oi1) + (pi2 * oi2) + sc))

// Q8)
document.write("<br>" + "<br>" + "Marks Sheet" + "<br>")
var marksobtained = 804
var totalmarks = 980
document.write("<br>" + "Total marks " + totalmarks)
document.write("<br>" + "Marks obtained " + marksobtained)
document.write("<br>" + "Percentage: " + (marksobtained / totalmarks * 100) + "%")

// Q9)
document.write("<br>" + "<br>" + "Currency in PKR" + "<br>")
var dollar = 10, saudiriyal = 25
document.write("<br>" + "Total currency in PKR:" + ((dollar * 104.80) + (saudiriyal * 28)))

// Q10)
var integer = 9
document.write("<br>" + "<br>" + (((integer + 5) * 10) / 2))

// Q11)
document.write("<br>" + "<br>" + "Age Calculator" + "<br>")
var currentyear = 2020, birthyear = 2001
document.write("<br>" + "Current year: " + currentyear)
document.write("<br>" + "Birth year: " + birthyear)
document.write("<br>" + "Your age is: " + (currentyear - birthYear))

// Q12)
document.write("<br>" + "<br>" + "The Geometrizer" + "<br>")
var radius = 20
document.write("<br>" + "Radius of cicle is:" + radius)
document.write("<br>" + "The circumference is:" + (2 * 3.1415926535897932 * radius))
document.write("<br>" + "The area is:" + (3.1415926535897932 * radius * radius))

// Q13)
document.write("<br>" + "<br>" + "The Lifetime Supply Calculator" + "<br>")
var snack = ("chocolate chip")
var age = 19, maxage = 80, perday = 3
document.write("<br>" + "Favourite Snack: " + snack)
document.write("<br>" + "Current age: " + age)
document.write("<br>" + "Estimated Maximum Age: " + maxage)
document.write("<br>" + "Amount of snack per day: " + perday)
document.write("<br>" + "You will need " + ((maxage - age) * perday) + " " + snack + " to last you until the ripe old age of " + maxage)





// Assignment # 6:-

// Q1)
var a = 10
document.write("<br>" + "<br>" + "Result:" + "<br>")
document.write("<br>" + "The value of a is: " + a)
document.write("<br>" + "<br>" + "------------------------------" + "<br>")
document.write("<br>" + "The value of ++a is: " + (++a))
document.write("<br>" + "Now the value of a is: " + a)
document.write("<br>" + "<br>" + "The value of a++ is: " + (a++))
document.write("<br>" + "Now the value of a is: " + a)
document.write("<br>" + "<br>" + "The value of --a is: " + (--a))
document.write("<br>" + "Now the value of a is: " + a)
document.write("<br>" + "<br>" + "The value of a-- is: " + (a--))
document.write("<br>" + "Now the value of a is: " + a)

// Q2)
var a = 2, b = 1
var result = --a - --b + ++b + b--
//       3 =  1  -  0  +  1  + 1 
document.write("<br>" + "<br>" + "a is: " + a)
document.write("<br>" + "b is: " + b)
document.write("<br>" + "result is: " + result)

// Q3)
var name1 = prompt("What is your name?")
document.write("<br>" + "<br>" + "Assalam-o-alikum " + name1 + "!" + "<br>")

// Q5)
var tabnum = +prompt("Enter a number: ")
if (tabnum) {
    document.write("<br>" + "Table of " + tabnum + " is:-")
    for (var i = 1; i <= 10; i++) {
        document.write("<br>" + tabnum + "x" + i + "=" + (tabnum * i));
    }
}
else {
    document.write("<br>" + "Table of 5 is:-")
    for (var i = 1; i <= 10; i++) {
        document.write("<br>" + "5x" + i + "=" + (5 * i));
    }
}
document.write("<br><br>")





// Assignment # 9-10:-

// Q1)
var city = prompt("What is your city name?")
if (city === "Karachi" || city === "karachi") {
    document.write("Welcome to city of lights" + "<br>")
}
else {
    document.write("")
}

// Q2)
var gender1 = prompt("What is your gender?")
if (gender1 === "Male" || gender1 === "male") {
    document.write("Good Morning Sir" + "<br>")
}
else if (gender1 === "Female" || gender1 === "female") {
    document.write("Good Morning Ma’am" + "<br>")
}

// Q3)
var signalcolor = prompt("Tell the color of traffic signal on road?")
if (signalcolor === "Red" || signalcolor === "red") {
    document.write("Must Stop" + "<br>")
}
else if (signalcolor === "Yellow" || signalcolor === "yellow") {
    document.write("Ready to move" + "<br>")
}
else if (signalcolor === "Green" || signalcolor === "green") {
    document.write("Move now" + "<br>")
}

// Q4)
var fuel = prompt("Remaining fuel in your car in litres")
if (fuel < 0.25) {
    document.write("Please refill the fuel in your car" + "<br>")
}

// Q5)

// a
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");        //It is valid
}

// b 
var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");        //It is unvalid
}

// c 
var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");        //It is valid
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");        //It is valid
}

// d 
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");        //It is valid
}

// e
if (true) {
    alert("True");        //It is valid
}
if (false) {
    alert("False");
}

// f
if ("car" < "cat") {
    alert("car is smaller than cat");        //It is valid
}

// Q6)
var som1 = +prompt("Marks obtained in Subject 1: ")
var stm1 = +prompt("Total marks in Subject 1: ")
var som2 = +prompt("Marks obtained in Subject 2: ")
var stm2 = +prompt("Total marks in Subject 2: ")
var som3 = +prompt("Marks obtained in Subject 3: ")
var stm3 = +prompt("Total marks in Subject 3: ")
var percentage1 = (som1 + som2 + som3) / (stm1 + stm2 + stm3) * 100
document.write("Marks Sheet" + "<br><br>")
document.write("Total marks : " + (stm1 + stm2 + stm3) + "<br>")
document.write("Marks obtained : " + (som1 + som2 + som3) + "<br>")
document.write("Percentage : " + percentage1 + "%" + "<br>")
if (percentage1 < '100' && percentage1 >= '80') {
    document.write("Grade : A-one" + "<br>")
    document.write("Remarks : Excellent" + "<br>")
}
else if (percentage1 < '80' && percentage1 >= '70') {
    document.write("Grade : A" + "<br>")
    document.write("Remarks : Good" + "<br>")
}
else if (percentage1 < '70' && percentage1 >= '60') {
    document.write("Grade : B" + "<br>")
    document.write("Remarks : You need to improve" + "<br>")
}
else if (percentage1 < '60' && percentage1 >= '0') {
    document.write("Grade : Fail" + "<br>")
    document.write("Remarks : Sorry" + "<br>")
}

// Q7)
var secretNumber = 5
var guessSecretNumber = +prompt("Guess the Secret Key")
var guessSecretNumberAddOne = (guessSecretNumber - 1)
if (secretNumber === guessSecretNumber) {
    document.write("Bingo! Correct answer" + "<br>")
}
else if (secretNumber === guessSecretNumberAddOne) {
    document.write("Close enough to the correct answer" + "<br>")
}

// Q8)
var number2 = +prompt("Enter any number: ")
if (number2 % 3 === 0) {
    document.write(number2 + " is divisible by 3" + "<br>")
}
else {
    document.write(number2 + " is not divisible by 3" + "<br>")
}

// Q9)
var number3 = +prompt("Enter any number to check if it is even or odd: ")
if (number3 % 2 === 0) {
    document.write(number3 + " is an even number" + "<br>")
}
else {
    document.write(number3 + " is an odd number" + "<br>")
}

// Q10)
var temp = prompt("Tell us the temperature")
if (temp > 40) {
    document.write("It is too hot outside" + "<br>")
}
else if (temp > 30) {
    document.write("The Weather today is Normal" + "<br>")
}
else if (temp > 20) {
    document.write("Today’s Weather is cool" + "<br>")
}
else if (temp > 10) {
    document.write("OMG! Today’s weather is so Cool" + "<br>")
}

// Q11)
var numcal1 = +prompt("Enter first number: ")
var numcal2 = +prompt("Enter second number: ")
var operator = prompt("Enter an operator: ")
if (operator === "+") {
    document.write(numcal1 + operator + numcal2 + "=" + numcal1 + numcal2 + "<br>")
}
if (operator === "-") {
    document.write(numcal1 + operator + numcal2 + "=" + numcal1 - numcal2 + "<br>")
}
if (operator === "*") {
    document.write(numcal1 + operator + numcal2 + "=" + numcal1 * numcal2 + "<br>")
}
if (operator === "/") {
    document.write(numcal1 + operator + numcal2 + "=" + numcal1 / numcal2 + "<br>")
}
if (operator === "%") {
    document.write(numcal1 + operator + numcal2 + "=" + numcal1 % numcal2 + "<br>")
}





// Assignment # 12-13:-

// Q1)
// var string = prompt("Enter a character")
// string.charCodeAt()
// if (string ==== string) {
//     document.write("The given character is a number")
// }
// else if (string ==== string) {
//     document.write("The given character is in  Uppercase")
// }
// else if (string ==== string) {
//     document.write("The given character is in  Lowercase")
// }

// Q2)
var int1 = +prompt("Enter first integer to be compared")
var int2 = +prompt("Enter second integer to be compared")
if (int1 > int2) {
    document.write(int1 + " is larger than " + int2 + "<br>")
}
else if (int1 < int2) {
    document.write(int2 + " is larger than " + int1 + "<br>")
}
else if (int1 == int2) {
    document.write(int1 + " is equal to " + int2 + "<br>")
}

// Q3)
var integer1 = +prompt("Enter an integer")
if (integer1 > 0) {
    document.write(int1 + " is larger than zero" + "<br>")
}
else if (integer1 < 0) {
    document.write(int2 + " is smaller than zero" + "<br>")
}
else if (integer1 == 0) {
    document.write(int1 + " is equal to zero" + "<br>")
}

// Q4)
// var char = prompt("Enter any character")
// if () {
//     document.write("It is a vowel" + "<br>")
// }
// else if () {
//     document.write("It is not a vowel" + "<br>")
// }

// Q5)
var corpass = pakistan
var guesspass = prompt("Enter your password" + "<br>")
if (corpass === guesspass) {
    document.write("Correct! The password you entered matches the original password" + "<br>")
}
else if (corpass !== guesspass) {
    document.write("Incorrect password" + "<br>")
}
else {
    document.write("Please enter your password" + "<br>")
}

// Q6)
var greeting, hour = 13
if (hour < 18) {
    greeting = "Good day"
}
else {
    greeting = "Good evening"
}

// Q7)
var time = prompt("Enter time in 2 hour format: ")
if (time >= 0000 && time < 1200) {
    document.write("Good Morning!" + "<br>")
}
else if (time >= 1200 && time < 1700) {
    document.write("Good Afternoon!" + "<br>")
}
else if (time >= 1700 && time < 2100) {
    document.write("Good Evening!" + "<br>")
}
else if (time >= 2100 && time < 2359) {
    document.write("Good Night!" + "<br>")
}





// Assignment # 14-16:-
// 1. Declare an empty array using JS literal notation to store
// student names in future.

var literalArray = [];

// 2. Declare an empty array using JS object notation to store
// student names in future.


var objectArray = [];

// 3. Declare and initialize a strings array.

var stringArray = ["karachi", "lahore", "islamabad"];

// 4. Declare and initialize a numbers array.

var numberArray = [1,2,3,4,5];

// 5. Declare and initialize a boolean array.

var booleanArray = [true,false];

// 6. Declare and initialize a mixed array.

var mixedArray = ["a",123,"true","karachi"];

// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:


var educationArray = ["SSC","HSC","BCS","BS","BCOM","MS","M.Phil","PhD"]
document.write("<h1>Qualification</h1>")
for (var i = 0; i <=7; i++){
    document.write(i+1+")"+educationArray[i]+"<br/>")
}


// 8.
// Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:


var studentName = ["Micheal","John", "Tony"]
var score = [320,230,480];
var percentage = [];
for(var i = 0; i <=2; i++){
    percentage[i] =  score[i] / 500 * 100

}

for (var a = 0; a<=2; a++){
document.write("score of "+studentName[a]+" is "+score[a]+"Precentage "+percentage[a]+"% <br/>")
}



// 9. Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

var color = ["Red","Yellow","Green"]
document.write(color+"<br/>");
var beginning = prompt("Enter which color you want to add at the beginning of array")
color.unshift(beginning)
document.write(color+"<br/>");
var ending = prompt("Enter which color you want to add at the ending of array")
color.push(ending)
document.write(color+"<br/>");
color.shift()
document.write(color+"<br/>");
color.pop()
document.write(color+"<br/>");
var update =+prompt("At which index do you want to add color?")
var newColor =+prompt(" which color do you want to add on that index?")
color.splice(update,0,newColor)
document.write(color+"<br/>");
var dlete =+prompt("At which index do you want to delete color?")
var colorDelete =+prompt(" which color do you want to delete on that index?")
color.splice(dlete, colorDelete);
document.write(color+"<br/>");

// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.

var score = [320,230,480,120]
document.write("Score of students :" +score+"<br/>");
score.sort()
document.write(" Ordered Score of students :" +score);

// 11.
// Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.

var cities = ["karachi","lahore","quetta","peshawar"];
document.write("cities list: <br/>"+cities+"<br/>")
var selectedCities = cities.slice(2,4)
document.write("selected cities list: <br/>"+selectedCities)

// 12. Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

var arr = ["This","is","my","cat"]
document.write("array/; <br/>"+arr+"<br/>")
var join = arr.join(" ")
document.write("string: <br/>"+join) 

// 13.
// Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)

var device = ["keyboard",",mouse","printer","monitor"]
document.write("devices : <br/>"+device+"<br/>")
var firstDevice = device.shift()
document.write("out : <br/>"+firstDevice+"<br/>")
var secondDevice = device.shift()
document.write("out : <br/>"+secondDevice+"<br/>")
var thirdDevice = device.shift()
document.write("out : <br/>"+thirdDevice+"<br/>")
var fourthDevice = device.shift()
document.write("out : <br/>"+fourthDevice+"<br/>")

// 14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last In-
// First Out)


var device = ["keyboard",",mouse","printer","monitor"]
document.write("devices : <br/>"+device+"<br/>")
var firstDevice = device.pop()
document.write("out : <br/>"+firstDevice+"<br/>")
var secondDevice = device.pop()
document.write("out : <br/>"+secondDevice+"<br/>")
var thirdDevice = device.pop()
document.write("out : <br/>"+thirdDevice+"<br/>")
var fourthDevice = device.pop()
document.write("out : <br/>"+fourthDevice+"<br/>")

// 15.
// Write a program to store phone manufacturers (Apple,
// Samsung, Motorola, Nokia, Sony & Haier) in an array.
// Display the following dropdown/select menu in your
// browser using document.write() method:

var phone = ["apple","samsung","motorla","nokia","sony & haier"]
document.write(
    "<select>"+
    "<option>"+phone[0]+"</option>"+
    "<option>"+phone[1]+"</option>"+
    "<option>"+phone[2]+"</option>"+
    "<option>"+phone[3]+"</option>"+
    "<option>"+phone[4]+"</option>"+
    "</select>"
//Assignment # 17-20

// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)
var num = [[],[],[]]

// 2. Declare and initialize a multidimensional array
// representing the following matrix:



num[0] = [0,1,2,3]
num[1] = [1,0,1,2]
num[2] = [2,1,0,1]
document.write(num[0]+"<br/>"+num[1]+"<br/>"+num[2]+"<br/>")


// 3. Write a program to print numeric counting from 1 to 10.


for (var i = 1; i <= 10; i++){
    document.write(i+"<br/>")
}

// 4. Write a program to print multiplication table of any
// number using for loop. Table number  & length should be
// taken as an input from user.

var table = +prompt("Enter a number  to show its multiplication table");
var length = +prompt("Enter Multiplication table" );
document.write("Multiplication Table of " +table+"<br/> length"+length+ "<br/>")
for(var i = 1; i <= length; i++){
    document.write(table+" x "+i+" = "+table*i+"<br/>")
}
// 5. Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]


var fruits = ["apple", "banana", "mango", "orange", "strawberry"]
var arr = fruits.length
for(var i = 0; i <arr; i++){
    document.write("Element at index "+i+" is "+fruits[i]+"<br/>")
}


// 6. Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

var num = [];
var odd = [];
var even = [];
var series = [];

for(var i = 0; i <=15; i++){
    num[i] = i+1;
}
document.write("counting :"+num+"<br/>")
document.write(" Reverse counting :"+num.reverse()+"<br/>")

for(var a = 1; a <= 20; a++){
    if(a % 2 !==0){
        even[a] = a;
    }
}
document.write("Even :"+even+"<br/>")
for(var b = 1; b <= 20; b++){
    if(b % 2 === 0){
        odd[b] = b;
    }
}
document.write("Odd :"+odd+"<br/>")
for(var d = 1; d <= 20; d++){
    if(d % 2 === 0){
        series[d] = d+"k";
    }
}
document.write("Series :"+series+"<br/>")




// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:

var a = ["cake","apple pie","cookie","chips","patties"]
var user = prompt("Welcome to ABC Bkery what do you want to order sir/ma'am")
var b = a.indexOf(user)
if(b<0){
    alert("we are sorry"+user+"is not available in our bakery")
}
else{
    alert(user+"is available at index "+b+" in our bakery") 
}



// 8. Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].

var arr = [24,53,78,91,12];
var max = Math.max.apply(Math,arr)
var min = Math.min.apply(Math,arr)
console.log(max , min)
document.write(
    "Array items: "+arr+
    "<br/> The largest number is " +max+
    "<br/> The samllest number is " +min
)


// 9. Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]

var arr = [24,53,78,91,12];
var max = Math.max.apply(Math,arr)
var min = Math.min.apply(Math,arr)
console.log(max , min)
document.write(
    "Array items: "+arr+
    "<br/> The largest number is " +max+
    "<br/> The samllest number is " +min+"<br/>"
)

// 10. Write a program to print multiples of 5 ranging 1 to
// 100.

for(var i = 1; i<=100; i++){
    if(i%5 === 0){
        document.write(i+" ,")
    }
}
