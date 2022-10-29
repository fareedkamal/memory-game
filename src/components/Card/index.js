import styled, { keyframes } from 'styled-components';
import React from 'react';

const spin = keyframes`
  from {
      transform:rotate(0deg);
  }
  to {
      transform:rotate(360deg);
  }
`;

const StyledCard = styled.div`
    height: 200px;
    width: 200px;
    border: 2px solid #af4144;
    border-radius: 15px;
    overflow: hidden;
    transition: all 0.2s ease-in;
    cursor: pointer;

    animation: ${spin} 0.5s linear 1;
   
    &:hover{
      transform: scale(1.1);
    }

`;

function Card(props) {
  const { src, handleCardClick } = props;

  return (
    <StyledCard onClick={handleCardClick}>
      <img src={src} alt="" />
    </StyledCard>
  );
}

export default Card;
