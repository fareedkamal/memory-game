import React from 'react';
import CardsGrid from './components/CardsGrid';
import ScoreBoard from './components/ScoreBoard';
import useGame from './components/useGame';
import Wrapper from './components/Wrapper';
import Logo from './components/Logo';
import Footer from './components/Footer';

function App() {
  const [cards, score, bestScore, handleCardClick] = useGame();
  return (
    <Wrapper>
      <Logo />
      <ScoreBoard score={score} bestScore={bestScore} />
      <CardsGrid cards={cards} handleCardClick={handleCardClick} />
      <Footer />
    </Wrapper>
  );
}

export default App;
