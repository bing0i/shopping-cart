import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage from './Homepage';
import ShopPage from './ShopPage';
import NavigationBar from './NavigationBar';
import Cart from './Cart';

const Routes = () => {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;