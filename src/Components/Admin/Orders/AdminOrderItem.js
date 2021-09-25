import React, {useContext} from 'react';
import {useHistory} from "react-router-dom";
import {Context} from "../../../index";
import {Button} from "react-bootstrap";
import {EDIT_ORDER_ROUTE} from "../../../utils/consts";
import {deleteOrder} from "../../../apis/adminOrderAPI";

const AdminOrderItem = ({order}) => {
    const history = useHistory()
    const {adminOrder} = useContext(Context)

    const destroyOrder = (order) => {
        let isDeleteProduct = window.confirm(`Заказ "${order.order.id}. ${order.order.title}" будет удален. \nПродолжить?`)

        if (isDeleteProduct) {
            deleteOrder(order.order.id).then(data => {
                adminOrder.deleteUserFromStore(order);
            })
        }
    }

    return (

        <tr>
            <td>{order.order.id}</td>
            <td>{order.order.name}</td>
            <td>{order.order.phone}</td>
            <td>{order.order.email}</td>
            <td>{order.order.description}</td>
            <td>{order.order.address}</td>
            <td style={{backgroundColor: '#' + order.order.order_status.color }}>{order.order.order_status.status}</td>
            <td>
                {
                    order.order.operator ?
                    order.order.operator.lastname
                    : 'Не назначен'
                }
            </td>
            <td>
                {order.products.map((product, key) =>
                    product.title + '\n'
                )}

            </td>

            <td className="">
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
                        onClick={() =>history.push(`${EDIT_ORDER_ROUTE}/${order.order.id}/info`)}
                    >Изменить</Button>
                </div>
            </td>
        </tr>
    );
};

export default AdminOrderItem;