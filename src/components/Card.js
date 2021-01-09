import { useState } from 'react';
import '../styles/Card.css';

const Card = () => {
  const [buttonVisibility, setButtonVisibility] = useState('hidden');

  return (
    <div className="card" 
      onMouseEnter={() => {
        setButtonVisibility('visible');
      }}
      onMouseLeave={() => {
        setButtonVisibility('hidden');
      }}
    > 
      <img className="cardImage" alt={''} src={'https://picsum.photos/275/275'} />
      <div className="cardButton" style={{visibility: buttonVisibility}}>ADD TO CART</div>
      <div className="cardInformation">
        <div className="cardTitle">{'Card title'.toUpperCase()}</div>
        <div className="cardDescription">Card description</div>
        <div className="cardPrice">$7.80</div>
      </div>
    </div>
  );
};

export default Card;