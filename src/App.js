import './App.css';
import {
    BrowserRouter,
    Route,
    Redirect,
    Switch
} from "react-router-dom";
import Navigation from "./Components/Navigation";
import Shop from "./Pages/Shop";
import Admin from "./Pages/Admin";
import Cart from "./Pages/Cart";
import React from "react";

const App = () => {
  return (
      <BrowserRouter>
          <Navigation/>
          <Switch>
              <Route exact path="/" component={Shop}/>
              <Route path="/admin" component={Admin}/>
              <Route path="/cart" component={Cart}/>
              <Redirect to="/"/>
          </Switch>

      </BrowserRouter>
  );
}

export default App;
