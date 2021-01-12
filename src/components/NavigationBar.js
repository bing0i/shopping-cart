import { Link } from 'react-router-dom';
import '../styles/NavigationBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const NavigationBar = (props) => {
  return (
    <nav className="navBar">
      <Link className="navLink" to="/shopping-cart">
        <h3 className="navProjectName">SHOPPING CART PROJECT</h3>
      </Link>
      <ul>
        <Link className="navLink" to="/shopping-cart">
          <li>HOME</li>
        </Link>
        <Link className="navLink" to="/shopping-cart/cart">
          <li>
            <FontAwesomeIcon icon={faShoppingCart} size='1x' />
            <span className="cartCounter">{props.numberOfItems}</span>
            &ensp;CART
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavigationBar;