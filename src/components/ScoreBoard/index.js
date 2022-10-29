import React from 'react';
import styled from 'styled-components';

const ScoreContainer = styled.div`
    width: 300px;
    height: 60px;
    background-color: #f37781;
    color: white;
    font-size: 2em;
    text-align: center;
    border-radius: 7px;
    border: 2px solid #af4144;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Board = styled.div`
    display: flex;
    justify-content: center;
    gap: 10rem;
`;

function ScoreBoard({ score, bestScore }) {
  return (
    <Board>
      <ScoreContainer>
        Score :
        {' '}
        {score}
      </ScoreContainer>
      <ScoreContainer>
        Best Score :
        {' '}
        {bestScore}
      </ScoreContainer>

    </Board>
  );
}

export default ScoreBoard;
