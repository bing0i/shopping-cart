import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage from './Homepage';
import ShopPage from './ShopPage';
import NavigationBar from './NavigationBar';

const Routes = () => {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;