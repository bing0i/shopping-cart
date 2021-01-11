import Card from './Card';

const Homepage = (props) => {
  const { items, addCartItem, changeQuantityCartItem } = props;

  return (
    <div style={{textAlign: 'center'}}>
      {items.map((item) => {
        return (
          <Card 
            key={item.id} 
            cardInformation={item} 
            addCartItem={addCartItem}
            changeQuantityCartItem={changeQuantityCartItem}
          />
        );
      })}
    </div>
  );
};

export default Homepage;