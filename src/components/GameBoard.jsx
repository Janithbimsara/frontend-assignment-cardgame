import { useEffect, useState } from "react";
import Cards from "./Cards";

const GameBoard = () => {
    const initialCards = ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D'];
    const [cards, setCards] = useState([]);
    const [flippedCards, setFlippedCards] = useState([]);
    const [matchedCards, setMatchedCards] = useState([]);
  
    useEffect(() => {
      // Shuffle the cards when the game starts
      setCards(initialCards.sort(() => Math.random() - 0.5));
    }, []);
  
    const handleCardClick = (index) => {
      if (flippedCards.length === 2 || matchedCards.includes(index)) return;
  
      const newFlippedCards = [...flippedCards, index];
      setFlippedCards(newFlippedCards);
  
      
      if (newFlippedCards.length === 2) {
        const [firstIndex, secondIndex] = newFlippedCards;
        if (cards[firstIndex] === cards[secondIndex]) {
          setMatchedCards([...matchedCards, firstIndex, secondIndex]);
        }
  
        
        setTimeout(() => setFlippedCards([]), 1000);
      }
    };
  
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', width: '500px' }}>
        {cards.map((card, index) => (
          <Cards
            key={index}
            card={card}
            isFlipped={flippedCards.includes(index) || matchedCards.includes(index)}
            onClick={() => handleCardClick(index)}
          />
        ))}
      </div>
    );
  };
  
  export default GameBoard;