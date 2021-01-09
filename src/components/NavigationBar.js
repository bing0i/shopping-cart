import { Link } from 'react-router-dom';
import '../styles/NavigationBar.css';

const NavigationBar = () => {
  return (
    <nav className="navBar">
      <h3>Shopping Cart Project</h3>
      <ul>
        <Link className="navLink" to="/">
          <li>Home</li>
        </Link>
        <Link className="navLink" to="shop">
          <li>Shop</li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavigationBar;