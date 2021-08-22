import React, {useContext, useEffect} from 'react';
import {
    Container,
    Row,
    Col
} from "react-bootstrap";
import {observer} from "mobx-react-lite";

import {Context} from "../index";
import {fetchCategories} from "../apis/shopAPI";
import {useParams} from "react-router-dom";
import ProductsList from "../Components/Shop/ProductsList";
import TypeBar from "../Components/Shop/TypeBar";

const Shop = observer(() => {
    // const {device} = useContext(Context)
    const {shop, cart} = useContext(Context)
    const { id } = useParams();
    console.log(cart)


    useEffect(() => {
        fetchCategories(id).then(data => shop.setCategories(data))
    }, [id])

    return (
        <Container>
            <h1>Каталог</h1>
            <Row className="mt-2">
                <Col md={3}>
                    {/*<h5>{shop.categories.category.title}</h5>*/}
                    <TypeBar/>
                </Col>
                <Col md={9}>
                    <h4>Товары</h4>
                    <ProductsList/>
                    {/*<Pages/>*/}
                </Col>
            </Row>
        </Container>
    );
});

export default Shop;