function add(x, y) {
  // This function adds two numbers
  return x + y;
}

function subtract(x, y) {
  // This function subtracts two numbers
  return x - y;
}

function multiply(x, y) {
  // This function multiplies two numbers
  return x * y;
}

function divide(x, y) {
  // This function divides two numbers, handling division by zero
  if (y === 0) {
    return "Error! Division by zero.";
  }
  return x / y;
}

function calculator() {
  // Main function to run the calculator program
  console.log("Welcome to the Calculator Program");

  while (true) {
    console.log("\nSelect operation:");
    console.log("1. Addition");
    console.log("2. Subtraction");
    console.log("3. Multiplication");
    console.log("4. Division");
    console.log("5. Exit");

    // Take input from the user
    const choice = prompt("Enter choice (1/2/3/4/5): ");

    // If the user chooses to exit, break out of the loop
    if (choice === '5') {
      console.log("Thank you for using the Calculator Program. Goodbye!");
      break;
    }

    // Check if choice is one of the four arithmetic options
    if (['1', '2', '3', '4'].includes(choice)) {
      let num1, num2;

      try {
        num1 = parseFloat(prompt("Enter first number: "));
        num2 = parseFloat(prompt("Enter second number: "));

        if (isNaN(num1) || isNaN(num2)) {
          throw new Error("Invalid input! Please enter numeric values.");
        }
      } catch (error) {
        console.log(error.message);
        continue;
      }

      if (choice === '1') {
        console.log(`The result of ${num1} + ${num2} is: ${add(num1, num2)}`);
      } else if (choice === '2') {
        console.log(`The result of ${num1} - ${num2} is: ${subtract(num1, num2)}`);
      } else if (choice === '3') {
        console.log(`The result of ${num1} * ${num2} is: ${multiply(num1, num2)}`);
      } else if (choice === '4') {
        const result = divide(num1, num2);
        console.log(`The result of ${num1} / ${num2} is: ${result}`);
      }
    } else {
      console.log("Invalid Input. Please select a valid operation.");
    }
  }
}

// Run the calculator program
calculator();
