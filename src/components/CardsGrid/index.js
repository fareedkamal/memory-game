import styled from 'styled-components';
import React, { useState } from 'react';
import shortid from 'shortid';
import Card from '../Card';

const getRandomKey = () => shortid.generate();

const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: 200px 200px 200px 200px 200px;
    gap: 20px;
    justify-content: center;
`;

function CardsGrid({ cards, handleCardClick }) {
  return (
    <GridWrapper>
      {cards
      && cards.map((i) => (
        <Card
          key={getRandomKey()}
          src={i}
          handleCardClick={handleCardClick}
        />
      ))}
    </GridWrapper>
  );
}
export default CardsGrid;
