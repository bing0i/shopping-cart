import { useState } from 'react';
import '../styles/Card.css';

const Card = (props) => {
  const [elementVisibility, setElementVisibility] = useState('hidden');
  const { cardInformation, addCartItem } = props;

  return (
    <div className="card" 
      onMouseEnter={() => {
        setElementVisibility('visible');
      }}
      onMouseLeave={() => {
        setElementVisibility('hidden');
      }}
    >
      <div className="cardImageFrame">
        <img className="cardImage" alt={cardInformation.title} src={cardInformation.thumbnail} />
      </div>
      <div className="cardTitle">{cardInformation.title.toUpperCase()}</div>
      <div className="cardDescription" style={{visibility: elementVisibility}}>{cardInformation.description}</div>
      <div className="cardPrice" style={{visibility: elementVisibility}}>{`$${cardInformation.price}`}</div>
      <div className="cardButton" onClick={() => addCartItem(cardInformation)}>ADD TO CART</div>
    </div>
  );
};

export default Card;