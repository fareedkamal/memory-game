import useScore from './useScore';
import useCards from './useCards';

const useGame = () => {
  const [score, bestScore, updateScore, resetScore] = useScore();
  const [cards, clickedCards, shuffleCards, updateClickedCards, resetClickedCards] = useCards();

  const handleCardClick = (e) => {
    if (clickedCards.includes(e.target.src)) {
      resetScore();
      resetClickedCards();
    } else {
      if (score === 15) {
        resetScore();
        resetClickedCards(); return;
      }
      updateScore();
      updateClickedCards(e.target.src);
    }
    shuffleCards();
  };

  return [cards, score, bestScore, handleCardClick];
};
export default useGame;
