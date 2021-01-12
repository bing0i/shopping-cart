import '../styles/MiniCard.css';
import { useState } from 'react';

const MiniCard = (props) => {
  const { cardInformation, removeCartItem, changeQuantityCartItem } = props;
  const [quantityValue, setQuantityValue] = useState(cardInformation.quantity);
  const handleQuantityValueChange = (e) => {
    const newQuantityValue = e.target.value;
    setQuantityValue(newQuantityValue);
    changeQuantityCartItem(cardInformation, newQuantityValue);
  };

  return (
    <div className="miniCard">
      <div className="miniCardImageFrame">
        <img className="miniCardImage" alt={cardInformation.title} src={cardInformation.thumbnail} />
      </div>
      <div className="miniCardInformation">
        <div className="miniCardTitle">{cardInformation.title.toUpperCase()}</div>
        <div className="miniCardDescription">{cardInformation.description}</div>
        <div className="miniCardFixedInformation">
          <input 
            className="miniCardQuantity" 
            type="number" 
            min="1" 
            max="100" 
            value={quantityValue} 
            onChange={handleQuantityValueChange} 
          />
          <div className="miniCardPrice">{`$${cardInformation.price}`}</div>
        </div>
      </div>
      <button 
        className="miniCardRemoveButton" 
        onClick={() => removeCartItem(cardInformation)}
      >
        &times;
      </button>
    </div>
  );
};

export default MiniCard;