import * as React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
  },
  heading: {
    fontSize: '1rem',
    marginBottom: '0.5rem',
  },
  problem: {
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  answer: {
    marginBottom: '2rem',
  },
}));

export default function MathProblems() {
  const classes = useStyles();
  const [answer, setAnswer] = React.useState('');
  const [problem, setProblem] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isNaN(answer)) {
      // Add your logic here to validate the answer and display the result
      alert(`The correct answer is ${answer}.`);
    } else {
      alert('Please enter a valid number');
    }
  };

  const generateProblem = () => {
    // Generate a random math problem here
    setAnswer('');
    setProblem('2 + 2 = ?');
  };

  return (
    <div className={classes.root}>
      <h1 className={classes.heading}>Math Problems</h1>
      <form onSubmit={handleSubmit} className={classes.form}>
        <input
          type="number"
          value={answer}
          placeholder="Enter your answer here..."
          onChange={(e) => setAnswer(e.target.value)}
        />
        {problem && (
          <>
            <p className={classes.problem}>{problem}</p>
            <button type="submit">Check Answer</button>
          </>
        )}
      </form>
    </div>
  );
}
