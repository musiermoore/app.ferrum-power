import React, {useContext, useEffect} from 'react';
import {Button, Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {CART_ROUTE, CREATE_ORDER_ROUTE} from "../../utils/consts";
import {useHistory} from "react-router-dom";
import AdminOrderList from "../../Components/Admin/Orders/AdminOrderList";
import {fetchOrdersForAdmin} from "../../apis/adminOrderAPI";

const AdminUsers = observer(() => {
    const {adminOrder} = useContext(Context)
    const history = useHistory()

    useEffect(() => {
        fetchOrdersForAdmin().then(data => {
            adminOrder.setOrders(data.orders)
        })
    }, [adminOrder.needUpdateOrder])

    return (
        <Container>
            <Row className="mt-2">
                <Col md={9}>
                    <h1>Список заказов</h1>
                </Col>
                <Col md={3} className="d-flex justify-content-end">
                    <div className="btn-actions">
                        <Button
                            className="nav-btn"
                            variant={"primary"}
                            onClick={() => history.push(CART_ROUTE)}
                        >Создать заказ</Button>
                    </div>

                </Col>
                <Col md={12}>
                    <AdminOrderList/>
                    {/*<Pages/>*/}
                </Col>
            </Row>
        </Container>
    );
});

export default AdminUsers;