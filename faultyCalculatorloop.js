import readline from "readline";

const swapOperator = {
  "+": "-",
  "-": "/",
  "*": "+",
  "/": "**",
};

const operation = (num1, num2, operator, faulty) => {
  if (!faulty) {
    operator = swapOperator[operator];
  }
  return eval(`${num1} ${operator} ${num2}`);
};

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askQuestion = (query) => {
  return new Promise((resolve) => r1.question(query, resolve));
};

const startCalculator = async () => {
  while (true) {
    let num1 = await askQuestion("Enter first number: ");
    num1 = Number(num1); // Convert input to number

    let num2 = await askQuestion("Enter second number: ");
    num2 = Number(num2);

    let operator = await askQuestion("Enter Operator (+, -, *, /): ");

    if (!["+", "-", "*", "/"].includes(operator)) {
      console.log("❌ Invalid operator. Please enter +, -, *, /");
      continue;
    }

    let randomNumber = Math.floor(Math.random() * 100) + 1;
    let result = operation(num1, num2, operator, randomNumber > 10);

    console.log(
      `🧮 Result of ${operator} on ${num1} and ${num2} is: ${result}`
    );

    let again = await askQuestion(
      "Do you want to perform another operation? (yes/no): "
    );

    if (again.toLowerCase() !== "yes") {
      console.log("👋 Exiting calculator. Goodbye!");
      r1.close();
      break;
    }
  }
};

startCalculator();
