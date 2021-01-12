import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage from './Homepage';
import Checkout from './Checkout';
import NavigationBar from './NavigationBar';
import Cart from './Cart';
import { useEffect, useState } from "react";

const Routes = () => {
  const [loaderVisibility, setLoaderVisibility] = useState('visible');
  let [items, setItems] = useState([]);
  useEffect(() => {
    const fetchCocktails = async () => {
      setLoaderVisibility('visible');
      let cocktails = [];
      for (let i = 0; i < 26; i++) {
        let letter = String.fromCharCode(97 + i);
        let response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`, {mode: 'cors'});
        let tempCocktails = await response.json();
        cocktails = tempCocktails.drinks !== null ? await cocktails.concat(tempCocktails.drinks) : cocktails;
      }

      setLoaderVisibility('hidden');
      setItems(cocktails.map((cocktail) => {
        let { idDrink, strDrink, strDrinkThumb } = cocktail;
        let strIngredients = '';
        for (let i = 1; i <= 15; i++) {
          strIngredients += (cocktail[`strIngredient${i}`] !== null && cocktail[`strIngredient${i}`] !== '') 
          ? (cocktail[`strIngredient${i}`] + ', ') 
          : '';
        }
        strIngredients = strIngredients.substr(0, strIngredients.length - 2);
        return { 
          id: idDrink, 
          title: strDrink, 
          description: strIngredients, 
          thumbnail: strDrinkThumb, 
          price: (Math.random() * (24.99 - 14.99) + 14.99).toFixed(2),
        };
      }));
    }

    fetchCocktails();
  }, []);
  
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
    if (indexOfItem !== -1 && quantity !== '' && quantity > 0 && quantity <= 100) {
      const newCartItems = [...cartItems];
      newCartItems[indexOfItem].quantity = quantity;
      setCartItems(newCartItems);
    }
  };

  return (
    <BrowserRouter>
      <NavigationBar numberOfItems={cartItems.length} />
      <div className="loader" style={{visibility: loaderVisibility}}></div>
      <Switch>
        <Route exact path="/shopping-cart" render={() => <Homepage items={items} addCartItem={addCartItem} />} />
        <Route exact path="/shopping-cart/checkout" component={Checkout} />
        <Route exact path="/shopping-cart/cart" render={() => <Cart cartItems={cartItems} removeCartItem={removeCartItem} changeQuantityCartItem={changeQuantityCartItem} />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;