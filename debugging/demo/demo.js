// Debugging in the Browser



// <--------- FIXME: Syntax Error --------->

// 🔔 Uncomment the next line
// console.log('This will cause a syntax error'

// The console will show a syntax error and highlight the line.




// <--------- FIXME: Type Error --------->

function typeError() {
  let object = undefined;
  // The next line will throw: Uncaught TypeError: can't access property "name", object is undefined
  console.log(object.name);
}

// 🔔 Uncomment the next line to see the runtime error 
// typeError();

// Note: In the stack trace, <anonymous> means the code was called from the top level (not inside a named function).




// <--------- FIXME: Reference Error --------->

function referenceError() {
  console.log(notDefinedVariable);
}

// 🔔 Uncomment the next line to see the reference error
// referenceError();




// <--------- FIXME: Call Stack in the Console --------->
function greetUser(name) {
   console.log("Hello, " + username); // Bug: should be 'name'
}

function onButtonClick() {
    greetUser("Alice");
}

// 🔔 Uncomment the next line to see the runtime error and call stack
// onButtonClick(); // Simulating a button click




// <--------- FIXME: Call Stack and Stepping --------->

function multiply(a, b) {
  return a * b;
}

function demo() {
  let x = 2;
  let y = 3;
  let result = multiply(x, y); // 🔔 Add breakpoint and use Step In to see the call stack
  console.log('Result:', result); 
}

// 🔔 Uncomment the console.log and function call first before adding breakpoint
// console.log('--- Demo: Call Stack and Stepping ---');
// demo();




// <--------- FIXME: Edge Case Testing --------->

function divide(a, b) {
   if (b === 0) {
    // 🔔 Uncomment the next line
     // console.error("Error: Division by zero is not allowed.");
     return null;
   }
   return a / b;
}

// 🔔 Uncomment the console.logs to see the output
// console.log(divide(10, 0)); // Output: Error: Division by zero is not allowed.
// console.log(divide(10, 2)); // Output: 5




// <--------- FIXME: Debugger Statement --------->

// 🔔 Uncomment the following lines to see how the debugger statement works.

// function showDebuggerDemo() {
//   let numbers = [2, 4, 7, 10, 15];
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > 8) {
//       // Execution will pause here only when the condition is true (number > 8)
//       debugger; // Try stepping over and into the loop body.
//     }
//     console.log('Index:', i, 'Value:', numbers[i]);
//   }
//   // Click resume and the loop continues.
// }

// console.log('--- Demo: Debugger Statement ---');
// showDebuggerDemo();



