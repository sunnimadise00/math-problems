const mathProblems = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
};

const generateMathProblem = () => {
  const operation = mathProblems[getRandomOperation()];
  return `${operation.toString()} ${generateRandomNumber()} ${operation.toString()} ${generateRandomNumber()}`;
};

const getRandomOperation = () => {
  const operations = Object.keys(mathProblems);
  const randomIndex = Math.floor(Math.random() * operations.length);
  return operations[randomIndex];
};

const generateRandomNumber = () => {
  const min = 1;
  const max = 100;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
