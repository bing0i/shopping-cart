import { useState } from 'react';
import '../styles/Card.css';

const Card = (props) => {
  const [buttonVisibility, setButtonVisibility] = useState('hidden');
  const { cardInformation, addCartItem } = props;

  return (
    <div className="card" 
      onMouseEnter={() => {
        setButtonVisibility('visible');
      }}
      onMouseLeave={() => {
        setButtonVisibility('hidden');
      }}
    > 
      <div className="cardImageFrame">
        <img className="cardImage" alt={''} src={'https://picsum.photos/275/275'} />
      </div>
      <div 
        className="cardButton"
        style={{visibility: buttonVisibility}}
        onClick={() => addCartItem(cardInformation)}
      >
        ADD TO CART
      </div>
      <div className="cardInformation">
        <div className="cardTitle">{cardInformation.title.toUpperCase()}</div>
        <div className="cardDescription">{cardInformation.description}</div>
        <div className="cardPrice">{`$${cardInformation.price}`}</div>
      </div>
    </div>
  );
};

export default Card;