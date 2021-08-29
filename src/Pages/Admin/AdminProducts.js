import React, {useContext, useEffect} from 'react';
import {Button, Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {ADMIN_PRODUCT_LIST, CREATE_CATEGORY_ROUTE, CREATE_PRODUCT_ROUTE} from "../../utils/consts";
import {useHistory} from "react-router-dom";
import {fetchProductsForAdmin} from "../../apis/adminCategoryAPI";
import AdminCategoryList from "../../Components/Admin/AdminCategoryList";
import AdminProductList from "../../Components/Admin/Products/AdminProductList";

const AdminProducts = observer(() => {
    const {adminShop} = useContext(Context)
    const history = useHistory()

    useEffect(() => {
        fetchProductsForAdmin().then(data => {
            adminShop.setProducts(data.products)
        })
    }, [adminShop.needUpdatedProduct])

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
                            onClick={() => history.push(CREATE_PRODUCT_ROUTE)}
                        >Создать продукт</Button>
                    </div>

                </Col>
                <Col md={12}>
                    <AdminProductList/>
                    {/*<Pages/>*/}
                </Col>
            </Row>
        </Container>
    );
});

export default AdminProducts;