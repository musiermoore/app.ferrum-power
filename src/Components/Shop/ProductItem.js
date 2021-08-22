import React, {useContext} from 'react';
import {Button, Card, Col} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import {useHistory} from "react-router-dom"
import {PRODUCT_ROUTE} from "../../utils/consts";
import {Context} from "../../index";

const ProductItem = ({product}) => {
    const history = useHistory()
    const {cart} = useContext(Context)
    return (
        <Col md={3} className={"mt-3"}>
            <Card style={{cursor: 'pointer'}} border={"light"} className="p-1" onClick={() => history.push(PRODUCT_ROUTE + '/' + product.id)}>
                <Image src={process.env.REACT_APP_IMAGE_URL +  product.image_path}/>
                <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
                    <div>Родитель: {product.category_id}</div>
                    <div className="d-flex align-items-center">
                        <div>{product.price} р</div>
                    </div>
                </div>
                <div>{product.title}</div>


            </Card>
            <Button
                className={"mt-2 p-1"}
                onClick={() => cart.addProductToCart(product, 1)}
            >В корзину</Button>
        </Col>

    );
};

export default ProductItem;
