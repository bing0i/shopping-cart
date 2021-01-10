import '../styles/MiniCard.css';

const MiniCard = () => {
  return (
    <div className="miniCard">
      <img className="miniCardImage" alt={''} src={'https://picsum.photos/150/150'} />
      <div className="miniCardInformation">
        <div className="miniCardTitle">{'Card title'.toUpperCase()}</div>
        <div className="miniCardDescription">Card description</div>
        <div className="miniCardFixedInformation">
          <input className="miniCardQuantity" type="number" min="1" max="100" defaultValue={1} />
          <div className="miniCardPrice">$7.80</div>
        </div>
      </div>
    </div>
  );
};

export default MiniCard;