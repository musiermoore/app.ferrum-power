import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import {
    fetchOneProduct
} from "../apis/shopAPI";

const Product = () => {
    const { id } = useParams();
    // const product = {id: id, title: 'product ' + id, price: (100 * id), rating: id}
    const [product, setProduct] = useState({info: []})

    useEffect(() => {
        fetchOneProduct(id).then(product => setProduct(product.product))
        console.log('отработал');
    }, [])
    return (
        <Container className="mt-3">
            <Row>
                <h2>{product.title}</h2>
                <Col md={4}>
                    <Image width={200} height={200} src={process.env.REACT_APP_IMAGE_URL + product.image_path}/>
                </Col>
                <Col md={4}>
                    <Row className="d-flex flex-column align-items-center">
                        <div
                            style={{width:240, height: 240, backgroundSize: 'cover', fontSize:20}}
                        >
                            <h3>Описание</h3>
                            <Row>
                                {product.description}
                            </Row>
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around"
                        style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
                    >
                        <h3>От: {product.price} руб.</h3>
                        <Button variant={"outline-dark"}>Добавить в корзину</Button>
                    </Card>
                </Col>
            </Row>
            <Row className="d-flex flex-column m-3">

            </Row>
        </Container>
    );
};

export default Product;