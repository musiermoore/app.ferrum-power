import React, {useContext, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import CartList from "../Components/Cart/CartList";
import Order from "../Components/Orders/Order";
import {Container} from "react-bootstrap";

const Cart = observer(() => {
    const {cart} = useContext(Context)

    return (
        <Container>
            <div>
                <CartList/>
                <Order/>
            </div>
        </Container>
    );
});

export default Cart;