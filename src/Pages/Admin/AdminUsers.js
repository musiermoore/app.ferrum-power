import React, {useContext, useEffect} from 'react';
import {Button, Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {ADMIN_PRODUCT_LIST, CREATE_CATEGORY_ROUTE, CREATE_PRODUCT_ROUTE} from "../../utils/consts";
import {useHistory} from "react-router-dom";
import AdminUserList from "../../Components/Admin/Users/AdminUserList";
import {fetchUsersForAdmin} from "../../apis/adminUserAPI";

const AdminUsers = observer(() => {
    const {adminUser} = useContext(Context)
    const history = useHistory()

    useEffect(() => {
        fetchUsersForAdmin().then(data => {
            adminUser.setUsers(data.users)
        })
    }, [adminUser.needUpdateUser])

    return (
        <Container>
            <Row className="mt-2">
                <Col md={9}>
                    <h1>Список пользователей</h1>
                </Col>
                <Col md={3} className="d-flex justify-content-end">
                    <div className="btn-actions">
                        <Button
                            className="nav-btn"
                            variant={"primary"}
                            onClick={() => history.push(CREATE_PRODUCT_ROUTE)}
                        >Создать пользователя</Button>
                    </div>

                </Col>
                <Col md={12}>
                    <AdminUserList/>
                    {/*<Pages/>*/}
                </Col>
            </Row>
        </Container>
    );
});

export default AdminUsers;