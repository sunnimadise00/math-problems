export const mathProblem = () => {
  // Generate two random numbers between 1 and 10
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;

  // Return the problem statement and answer
  return {
    problem: `${num1} x ${num2} =`,
    answer: num1 * num2,
  };
};
