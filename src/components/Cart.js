import MiniCard from './MiniCard';
import '../styles/Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMehBlank } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';

const Cart = (props) => {
  const { cartItems, removeCartItem, changeQuantityCartItem } = props;

  return (
    <div className="cart">
      {cartItems.length === 0 
        ? <div className="cartIsEmpty">
            <FontAwesomeIcon className="cartIsEmptyIcon" icon={faMehBlank} size="1x" />
            &ensp;CART IS EMPTY!
          </div>
        : <div className="cartItems">
            <Link className="cartLink" to="/shopping-cart/checkout">
              <button className="cartCheckoutButton">CHECKOUT</button>
            </Link>
            {cartItems.map((item) => {
              return (
                <MiniCard 
                  key={item.id} 
                  cardInformation={item}
                  removeCartItem={removeCartItem}
                  changeQuantityCartItem={changeQuantityCartItem}
                />
              );
            })}
          </div>
      }
    </div>
  );
};

export default Cart;