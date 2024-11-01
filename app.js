


//----------------------------------------------------------------------Asignment  No 05(MATH EXPRESSIONS)----------------------------------------------------------------------
// //----------------------------------------------------------------------Task No 01----------------------------------------------------------------------
// Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.

// var num1 = 3;
// var num2 = 5;
// result = num1 + num2;
// document.write("sum of " + num1 +  "and" + num2 + "= " + result);

// //----------------------------------------------------------------------Task No 02----------------------------------------------------------------------

//Repeat task1 for subtraction, multiplication, division &
// modulus.

// var multiplication = num2 * num1;
// var addition = num1 + num2;
// var substraction = num2 -num1;
// var divsion = num1 / num2;
// var module = num2%num1;

 //----------------------------------------------------------------------Task No 03----------------------------------------------------------------------
//  Do the following using JS Mathematic Expressions
//  a. Declare a variable.
//  b. Show the value of variable in your browser like “Value
//  after variable declaration is: ??”.
//  c. Initialize the variable with some number.
//  d. Show the value of variable in your browser like “Initial
//  value: 5”.
//  e. Increment the variable.
//  f. Show the value of variable in your browser like “Value
//  after increment is: 6”.
//  g. Add 7 to the variable.
//  h. Show the value of variable in your browser like “Value
//  Value after variable declaration is undefined
//  Initial value: 5
//  Value after increment is: 6
//  Value after addition is: 13
//  Value after decrement is: 12
//  The remainder is: 0

// var val = 5;
// document.write("Value after variable declaration is" + val);
// val = 6;
// document.write("Initial  value: " + val);
// val++;
// document.write("Value after increment is:" + val);
// val + 7;

 //----------------------------------------------------------------------Task No 04----------------------------------------------------------------------
//  Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie. Example output:

// var ticketPrice = 600;
// var buying = 5;
// document.write("total cost to buying a movie ticket is" +ticketPrice * buying);
 //----------------------------------------------------------------------Task No 05----------------------------------------------------------------------
//  Write a script to display multiplication table of any
// number in your browser. E.g
// var number = 4;
// document.write("<h1>Table of 2<h1/>")
// document.write("number x 1 = " , number * 1 );
// document.write("number x 2 = " , number * 2 );
// document.write("number x 3 = " , number * 3 );
// document.write("number x 4 = " , number * 4 );
// document.write("number x 5 = " , number * 5 );
// document.write("number x 6 = " , number * 6 );
// document.write("number x 7 = " , number * 7 );
// document.write("number x 8 = " , number * 8 );
// document.write("number x 9 = " , number * 9 );
// document.write("number x 10 =" ,number *  10);

 //----------------------------------------------------------------------Task No 06----------------------------------------------------------------------

//  6. The Temperature Converter: It’s hot out! Let’s make a
//  converter based on the steps here.
//  a. Store a Celsius temperature into a variable.
//  b. Convert it to Fahrenheit & output “NNoC is NNoF”.
//  c. Now store a Fahrenheit temperature into a variable.
//  d. Convert it to Celsius & output “NNoF is NNoC”.


// var celsius = 25; 


// var fahrenheitFromCelsius = (celsius * 9/5) + 32;
// document.write(`${celsius}°C is ${fahrenheitFromCelsius.toFixed(2)}°F<br>`);


// var fahrenheit = 77; 


// var celsiusFromFahrenheit = (fahrenheit - 32) * 5/9;
// document.write(`${fahrenheit}°F is ${celsiusFromFahrenheit.toFixed(2)}°C`);

 //----------------------------------------------------------------------Task No 07----------------------------------------------------------------------
//  Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables

// MATH EXPRESSIONS | JAVASCRIPT

// Page 5 of 9

// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges

// Compute the total cost & show the receipt in your browser.



//  var priceOfItem1 = 15.99; 
//  var priceOfItem2 = 29.99; 


//  var quantityOfItem1 = 3; 

//  var quantityOfItem2 = 2; 


//  var shippingCharges = 5.99; 

//  var totalCostOfItem1 = priceOfItem1 * quantityOfItem1;
//  var totalCostOfItem2 = priceOfItem2 * quantityOfItem2;
//  var subtotal = totalCostOfItem1 + totalCostOfItem2;
//  var totalCost = subtotal + shippingCharges;


//  document.write("<h2>Receipt</h2>");
//  document.write("<p>Item 1: $" + priceOfItem1.toFixed(2) + " x " + quantityOfItem1 + " = $" + totalCostOfItem1.toFixed(2) + "</p>");
//  document.write("<p>Item 2: $" + priceOfItem2.toFixed(2) + " x " + quantityOfItem2 + " = $" + totalCostOfItem2.toFixed(2) + "</p>");
//  document.write("<p>Subtotal: $" + subtotal.toFixed(2) + "</p>");
//  document.write("<p>Shipping Charges: $" + shippingCharges.toFixed(2) + "</p>");
//  document.write("<p><strong>Total Cost: $" + totalCost.toFixed(2) + "</strong></p>");

 //----------------------------------------------------------------------Task No 08----------------------------------------------------------------------
//  Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser

        // var totalMarks = 500; 
        // var marksObtained = 375; 


        // var percentage = (marksObtained / totalMarks) * 100;

        // document.write("<h2>Result</h2>");
        // document.write("<p>Total Marks: " + totalMarks + "</p>");
        // document.write("<p>Marks Obtained: " + marksObtained + "</p>");
        // document.write("<p>Percentage: " + percentage.toFixed(2) + "%</p>");


         //----------------------------------------------------------------------Task No 09----------------------------------------------------------------------

//          Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)

// var usdToPkrRate = 104.80;
// // var sarToPkrRate = 28;
// var amountInUsd = 10;
// var amountInSar = 25;


// var totalInPkr = (amountInUsd * usdToPkrRate) + (amountInSar * sarToPkrRate);


// document.write("Total in Pakistani Rupees: " + totalInPkr);


         //----------------------------------------------------------------------Task No 10----------------------------------------------------------------------
//          Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

// var initialNumber = 20;


// var result = (((initialNumber + 5) * 10) / 2);


// document.write("<h1>Result: " + result + "</h1>");

         //----------------------------------------------------------------------Task No 11----------------------------------------------------------------------
        //  The Age Calculator: Forgot how old someone is?
        //  Calculate it!
        //  a. Store the current year in a variable.
        //  b. Store their birth year in a variable.
        //  c. Calculate their 2 possible ages based on the stored
        //  values.
        // var currentYear = 2024;
        // var birthYear = 1990;

     
        // var ageIfBirthdayHasOccurred = currentYear - birthYear;

       
        // var ageIfBirthdayHasNotOccurred = ageIfBirthdayHasOccurred - 1;

        // document.write("<h1>They are either " + ageIfBirthdayHasOccurred + " or " + ageIfBirthdayHasNotOccurred + " years old</h1>");

                 //----------------------------------------------------------------------Task No 12----------------------------------------------------------------------
                //  The Geometrizer: Calculate properties of a circle.
                //  a. Store a radius into a variable.
                 
                 
                 
                //  Page 8 of 9
                //  b. Calculate the circumference based on the radius, and
                //  output “The circumference is NN”.
                //  (Hint : Circumference of a circle = 2 π r , π = 3.142)
                //  Calculate the area based on the radius, and output “The
                //  area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

                // var radius = 10; 

          
                // var pi = 3.142;
        
                
                // var circumference = 2 * pi * radius;
        
                // var area = pi * radius * radius;
        
              
                // document.write("<h1>The circumference is " + circumference.toFixed(2) + "</h1>");
                // document.write("<h1>The area is " + area.toFixed(2) + "</h1>");
                                 //----------------------------------------------------------------------Task No 13----------------------------------------------------------------------
//                                  13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.


// var snack = "chocolates"; 


// var currentAge = 25; 


// var maxAge = 80; 


// var amountPerDay = 2; 


// var yearsLeft = maxAge - currentAge; 
// var totalAmountNeeded = yearsLeft * 365 * amountPerDay; 


// document.write("<h1>You will need " + totalAmountNeeded + " " + snack + " to last you until the ripe old age of " + maxAge + ".</h1>");
