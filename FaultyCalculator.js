/* Faulty Calculator

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **


It performs wrong operation 10% of the times
*/

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
    return eval(`${num1} ${operator} ${num2}`);
  }
  return eval(`${num1} ${operator} ${num2}`);
};

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question("Enter first number: ", function (num1) {
  console.log("First Number is: ", num1);
  r1.question("Enter second number: ", function (num2) {
    console.log("2nd Number is: ", num2);
    r1.question("Enter Operator +, -, *, / : ", function (operator) {
      console.log("operator is: ", operator);

      if (!["+", "-", "*", "/"].includes(operator)) {
        console.log("Please Enter Correct Opeartor Value + ,-, *, /");
        r1.close();
      } else {
        let randomNumber = Math.floor(Math.random() * 100) + 1;

        console.log("random number is ", randomNumber, randomNumber > 10);
        let result = operation(num1, num2, operator, randomNumber > 10);

        console.log(
          `Result of ${operator} on ${num1} and ${num2} is : ${result}`
        );
      }
      r1.close();
    });
  });
});
