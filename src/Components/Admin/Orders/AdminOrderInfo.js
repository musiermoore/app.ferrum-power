import React, {useContext, useEffect, useState} from 'react';
import {useHistory, useParams} from "react-router-dom";
import {Context} from "../../../index";
import {Button, Container, Spinner, Table} from "react-bootstrap";
import {ADMIN_ORDERS_LIST, EDIT_ORDER_ROUTE} from "../../../utils/consts";
import {deleteOrder, getOrderForEdit} from "../../../apis/adminOrderAPI";

const AdminOrderInfo = () => {
    const history = useHistory()
    const {adminOrder} = useContext(Context)

    const {id} = useParams();

    const [loading, setLoading] = useState(true)
    const [order, setOrder] = useState({})


    useEffect(() => {
        getOrderForEdit(id).then(data => {
            console.log(data)
            adminOrder.setOrder(data)
            setOrder(data)

        }).finally(() => setLoading(false))

    }, [])

    const destroyOrder = (order) => {
        let isDeleteProduct = window.confirm(`Заказ №${order.order.id} от ${order.order.name} будет удален. \nПродолжить?`)

        if (isDeleteProduct) {
            deleteOrder(order.order.id).then(data => {
                adminOrder.deleteOrderFromStore(order);
                history.push(ADMIN_ORDERS_LIST);
            })


        }
    }

    if (loading) {
        return <Spinner animation={"grow"}/>
    }

    return (
        <Container>
            <div className="order-info">
                <div className="order__number fw-bold">
                    Заказ №{order.order.id}
                </div>
                <div className="order__customer-name">
                    Имя заказчика: {order.order.name}
                </div>
                <div className="order__customer-phone">
                    Телефон заказчика: {order.order.phone}
                </div>
                <div className="order__customer-email">
                    Почтовый ящик: {order.order.email}
                </div>
                <div className="order__description">
                    Описание: {order.order.description}
                </div>
                <div className="order__address">
                    Адрес: {order.order.address}
                </div>
                <div className="order__status" style={{backgroundColor: '#' + order.order.order_status.color }}>
                    Статус заказа: {order.order.order_status.status}
                </div>

                <div className="order__operator">
                    Оператор: {
                    order.order.operator ?
                        order.order.operator.firstname
                        : 'Не назначен'
                }



                </div>


                <div className="order__products mt-2">

                    {order.products.length ?
                        <Table striped bordered hover>
                            <caption>Список продуктов</caption>
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Название товара</th>
                                <th>Цена за штуку</th>
                                <th>Количество</th>
                                <th>Полная стоимость</th>
                                <th>Изображение</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                order.products.map((product, key) =>
                                    <tr className="order__product">
                                        <td>{product.product_info.id}</td>
                                        <td>{product.product_info.title}</td>
                                        <td>{product.product_info.price} р.</td>
                                        <td><input className={"form-control"} type="number"
                                                   value={product.quantity}/> шт.
                                            <div>
                                                <button
                                                    className="btn btn-success "
                                                    onClick={product.quantity += 1}
                                                >+
                                                </button>
                                                <span></span>
                                                <button
                                                    className="btn btn-danger"
                                                >-
                                                </button>
                                            </div></td>
                                        <td>{product.full_price} р.</td>
                                        <td>
                                            <img
                                                src={process.env.REACT_APP_IMAGE_URL + product.product_info.image_path}
                                                alt="Изображение товара"
                                                width="200"
                                                height="200"
                                            />
                                        </td>
                                    </tr>
                                )
                            }

                            </tbody>
                        </Table>
                        :
                        <div className="alert alert-info">
                            Товаров нет.
                        </div>
                    }
                </div>



                <div className="btn-delete mr-2">
                    <Button
                        className={"mt-2 p-1"}
                        variant={"danger"}
                        onClick={() => destroyOrder(order)}
                    >Удалить</Button>
                </div>

                <div className="btn-edit">
                    <Button
                        className={"mt-2 p-1"}
                        variant={"primary"}
                        onClick={() =>history.push(`${EDIT_ORDER_ROUTE}/${order.order.id}/edit`)}
                    >Изменить</Button>
                </div>
            </div>
        </Container>



    );
};

export default AdminOrderInfo;