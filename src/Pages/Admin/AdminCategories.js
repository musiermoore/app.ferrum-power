import React, {useContext, useEffect} from 'react';
import {Button, Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {ADMIN_PRODUCT_LIST, CREATE_CATEGORY_ROUTE} from "../../utils/consts";
import {useHistory} from "react-router-dom";
import {fetchCategoriesForAdmin} from "../../apis/adminCategoryAPI";
import AdminCategoryList from "../../Components/Admin/AdminCategoryList";

const AdminCategories = observer(() => {
    const {adminShop} = useContext(Context)
    const history = useHistory()

    useEffect(() => {
        fetchCategoriesForAdmin().then(data => {
            adminShop.setCategories(data.categories)
        })
    }, [adminShop.needUpdatedCategory])

    return (
        <Container>
            <Row className="mt-2">
                <Col md={9}>
                    <h1>Список категорий</h1>
                </Col>
                <Col md={3} className="d-flex justify-content-end">
                    <div className="btn-actions">
                        <Button
                            className="nav-btn"
                            variant={"primary"}
                            onClick={() => history.push(CREATE_CATEGORY_ROUTE)}
                        >Создать категорию</Button>
                    </div>

                </Col>
                <Col md={12}>
                    <AdminCategoryList/>
                    {/*<Pages/>*/}
                </Col>
            </Row>
        </Container>
    );
});

export default AdminCategories;