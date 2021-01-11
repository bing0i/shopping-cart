import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage from './Homepage';
import Checkout from './Checkout';
import NavigationBar from './NavigationBar';
import Cart from './Cart';
import { useState } from "react";

const Routes = () => {
  const items = [
    {id: 405, title: 'TUINe', description: 'weqwqewqe', price: 2782.32}, 
    {id: 404, title: 'weqwqe', description: 'xzcz', price: 9898},
  ];
  
  const [cartItems, setCartItems] = useState([]);
  const addCartItem = (item) => {
    let indexOfItem = cartItems.map((cartItem) => cartItem.id).indexOf(item.id);
    if (indexOfItem === -1) {
      setCartItems(cartItems.concat({...item, ...{quantity: 1}}));
    } else {
      const newCartItems = [...cartItems];
      newCartItems[indexOfItem].quantity += 1;
      setCartItems(newCartItems);
    }
  };
  const removeCartItem = (item) => {
    let indexOfItem = cartItems.map((cartItem) => cartItem.id).indexOf(item.id);
    if (indexOfItem !== -1) {
      const newCartItems = [...cartItems];
      newCartItems.splice(indexOfItem, 1);
      setCartItems(newCartItems);
    }
  };
  const changeQuantityCartItem = (item, quantity) => {
    let indexOfItem = cartItems.map((cartItem) => cartItem.id).indexOf(item.id);
    if (indexOfItem !== -1 && quantity !== '' && quantity > 0) {
      const newCartItems = [...cartItems];
      newCartItems[indexOfItem].quantity = quantity;
      setCartItems(newCartItems);
    }
  };

  return (
    <BrowserRouter>
      <NavigationBar numberOfItems={cartItems.length} />
      <Switch>
        <Route exact path="/" render={() => <Homepage items={items} addCartItem={addCartItem} />} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/cart" render={() => <Cart cartItems={cartItems} removeCartItem={removeCartItem} changeQuantityCartItem={changeQuantityCartItem} />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;