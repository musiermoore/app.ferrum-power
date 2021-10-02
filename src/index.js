import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ShopStore from "./stores/ShopStore";
import UserStore from "./stores/UserStore";
import CartStore from "./stores/CartStore";
import AdminShopStore from "./stores/AdminShopStore";
import AdminUserStore from "./stores/AdminUserStore";
import AdminOrderStore from "./stores/AdminOrderStore";

export const Context = createContext(null)

ReactDOM.render(
    <Context.Provider value={{
        user: new UserStore(),
        shop: new ShopStore(),
        cart: new CartStore(),
        adminShop: new AdminShopStore(),
        adminUser: new AdminUserStore(),
        adminOrder: new AdminOrderStore(),
    }}>
        <React.StrictMode>
            <App />
        </React.StrictMode>,
    </Context.Provider>,
  document.getElementById('root')
);
