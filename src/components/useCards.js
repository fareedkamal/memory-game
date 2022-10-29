import { useState } from 'react';
import images from '../assets/images';

const useCards = () => {
  const [cards, setCards] = useState(images);

  const [clickedCards, setClickedCards] = useState([]);

  const getRandomCards = () => {
    const random = [];
    for (let i = 0, r = Math.floor(Math.random() * images.length); i < images.length; i += 1) {
      while (random.includes(images[r])) {
        r = Math.floor(Math.random() * images.length);
      }
      random.push(images[r]);
    }
    return random;
  };

  const updateClickedCards = (id) => {
    setClickedCards([...clickedCards, id]);
  };
  const resetClickedCards = (id) => {
    setClickedCards([]);
  };

  const shuffleCards = () => {
    setCards(getRandomCards());
  };
  return [cards, clickedCards, shuffleCards, updateClickedCards, resetClickedCards];
};

export default useCards;
