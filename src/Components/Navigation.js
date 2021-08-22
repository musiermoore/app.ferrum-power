import React from 'react';
import {Link, Route} from "react-router-dom";
import Admin from "../Pages/Admin";
import Shop from "../Pages/Shop";
import Cart from "../Pages/Cart";

const Navigation = () => {
    return (
        <div>
            <Link to="/admin">Админ</Link>
            <Link to="/cart">Корзина</Link>
            <Link to="/">Магазин</Link>
        </div>
    );
};

export default Navigation;