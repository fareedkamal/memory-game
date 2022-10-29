import { useState } from 'react';

const useScore = () => {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const resetScore = () => {
    setScore(0);
  };

  const updateScore = () => {
    setScore((prevScore) => {
      const currentScore = prevScore + 1;
      if (currentScore > bestScore) { setBestScore(currentScore); }
      return currentScore;
    });
  };

  return [score, bestScore, updateScore, resetScore];
};
export default useScore;
