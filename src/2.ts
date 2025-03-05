/**
 * Random math problem
 */
function getRandomMathProblem(): string {
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  const op = ["+", "-", "*", "/"][Math.floor(Math.random() * 4)];
  let answer: string | number;

  switch (op) {
    case "+":
      answer = num1 + num2;
      break;
    case "-":
      answer = num1 - num2;
      break;
    case "*":
      answer = num1 * num2;
      break;
    case "/":
      answer = num1 / num2;
      break;
  }

  return `${num1} ${op} ${num2} = ${answer}`;
}
