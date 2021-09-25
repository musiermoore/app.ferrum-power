import React, {useContext, useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../../index";
import {Table} from "react-bootstrap";
import AdminOrderItem from "./AdminOrderItem";

const AdminOrderList = observer(() => {
    const {adminOrder} = useContext(Context)

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        setOrders(adminOrder.orders);
        adminOrder.setUpdateOrderList(false)
    }, [adminOrder.orders]);

    console.log(orders);
    return (
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>#</th>
                <th>Имя заказчика</th>
                <th>Телефон</th>
                <th>Почта</th>
                <th>Описание</th>
                <th>Адрес</th>
                <th>Статус заказа</th>
                <th>Оператор</th>
                <th>Продукты</th>
                <th>Действия</th>
            </tr>
            </thead>
            <tbody>
            {(orders.length) ?
                orders.map((order, key) =>
                    <AdminOrderItem key={key} order={order} />
                )
                :
                <tr></tr>
            }
            </tbody>
        </Table>
    );
})

export default AdminOrderList;
