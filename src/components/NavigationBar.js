import { Link } from 'react-router-dom';
import '../styles/NavigationBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const NavigationBar = () => {
  return (
    <nav className="navBar">
      <h3>SHOPPING CART PROJECT</h3>
      <ul>
        <Link className="navLink" to="/">
          <li>HOME</li>
        </Link>
        <Link className="navLink" to="shop">
          <li>SHOP</li>
        </Link>
        <Link className="navLink" to="cart">
          <li>
            <FontAwesomeIcon icon={faShoppingCart} size='1x' />
            <span className="cartCounter" style={{borderRadius: '50%', backgroundColor: 'crimson', fontSize: '10px', verticalAlign: 'top', padding: '0px 4px'}}>1</span>
            &ensp;CART
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavigationBar;