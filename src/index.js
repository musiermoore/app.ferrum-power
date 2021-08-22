import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ShopStore from "./stores/ShopStore";
import UserStore from "./stores/UserStore";
import CartStore from "./stores/CartStore";

export const Context = createContext(null)

ReactDOM.render(
    <Context.Provider value={{
        user: new UserStore(),
        shop: new ShopStore(),
        cart: new CartStore(),
    }}>
        <React.StrictMode>
            <App />
        </React.StrictMode>,
    </Context.Provider>,
  document.getElementById('root')
);
