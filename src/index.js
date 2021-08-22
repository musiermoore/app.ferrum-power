import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ShopStore from "./stores/ShopStore";
import UserStore from "./stores/UserStore";

export const Context = createContext(null)

ReactDOM.render(
    <Context.Provider value={{
        user: new UserStore(),
        shop: new ShopStore(),
    }}>
        <React.StrictMode>
            <App />
        </React.StrictMode>,
    </Context.Provider>,
  document.getElementById('root')
);
