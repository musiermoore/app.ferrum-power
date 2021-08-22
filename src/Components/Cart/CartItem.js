import React, {useContext} from 'react';
import {useHistory} from "react-router-dom";
import {Context} from "../../index";
import {Button, Card, Col} from "react-bootstrap";
import {PRODUCT_ROUTE} from "../../utils/consts";
import Image from "react-bootstrap/Image";

const CartItem = ({product}) => {
    const history = useHistory()
    const {cart} = useContext(Context)
    console.log('---');
    console.log(product)

    return (
        <Col md={3} className={"mt-3"}>
            <Card style={{width: 150, cursor: 'pointer'}} border={"light"} className="p-1" onClick={() => history.push(PRODUCT_ROUTE + '/' + product.id)}>
                <Image width={150} height={150} src={process.env.REACT_APP_IMAGE_URL +  product.image_path}/>
                <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
                    <div>Родитель: {product.category_id}</div>
                    <div className="d-flex align-items-center">
                        <div>{product.price} р</div>
                    </div>
                </div>
                <div>{product.title}</div>
                <div>Кол-во: {product.quantity}</div>


            </Card>
            <Button
                className={"mt-2 p-1"}
                onClick={() => cart.removeProductFromCart(product)}
            >Удалить из корзины</Button>
        </Col>
    );
};

export default CartItem;