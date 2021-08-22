import React, {useContext} from 'react';
import {Row} from "react-bootstrap";
import {Context} from "../../index";
import CartItem from "./CartItem";
import {observer} from "mobx-react-lite";

const CartList = observer(() => {
    const {cart} = useContext(Context)
    console.log(cart);

    return (
        <div>
            <Row className="d-flex">
                <h1>Корзина</h1>
                {
                    cart.cartProducts.map(product =>
                        <CartItem key={product.id} product={product}/>
                    )
                }
            </Row>
        </div>
    );
});

export default CartList;