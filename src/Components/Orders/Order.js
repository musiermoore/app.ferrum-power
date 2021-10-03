import React, {useContext, useState} from 'react';
import {
    Button,
    Card,
    Container,
    Form,
    FloatingLabel
} from "react-bootstrap";
import {makeOrder} from "../../apis/orderAPI";
import {Context} from "../../index";


const Order = () => {
    const {cart} = useContext(Context)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [description, setDescription] = useState('')
    const [address, setAddress] = useState('')
    const [products, setProducts] = useState([])

    const _makeOrder = async () => {

        try {
            const response = await makeOrder(name, phone, email, description, address, cart.cartProductsForOrder)
            alert(response.message);
        } catch (e) {
            alert(e.response.data.errors[0].message)
        }

    }

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card  style={{width: 600}} className="p-5">
                <h2 className="m-auto">Отправка заказа</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-2"
                        placeholder="Введите имя"
                        name="name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <Form.Control
                        className="mt-2"
                        placeholder="Введите почту"
                        name="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Control
                        className="mt-2"
                        placeholder="Введите номер телефона"
                        name="phone"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                    />
                    <Form.Control
                        className="mt-2"
                        placeholder="Введите адрес"
                        name="address"
                        type="text"
                        value={address}
                        onChange={e => setAddress(e.target.value)}
                    />
                    <FloatingLabel label={"Описание"} className={"mt-2"}>
                        <Form.Control
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ minHeight: '100px', maxHeight: '300px' }}
                            name="description"
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                        />
                    </FloatingLabel>
                    <Button
                        variant={"outline-success"}
                        className="mt-2"
                        onClick={_makeOrder}
                    >Отправить</Button>
                </Form>
            </Card>
        </Container>
    );
};

export default Order;