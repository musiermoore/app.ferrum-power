import React, {useContext, useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../../index";
import {Table} from "react-bootstrap";
import AdminProductItem from "./AdminProductItem";

const AdminProductsList = observer(() => {
    const {adminShop} = useContext(Context)

    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(adminShop.products);
        adminShop.setUpdatedProductsList(false)
    }, [adminShop.products]);

    console.log(products);
    return (
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>#</th>
                <th>Название продукта</th>
                <th>Ссылка на продукт</th>
                <th>Родительская категория</th>
                <th>Наличие на складе</th>
                <th>Цена</th>
                <th>Действия</th>
            </tr>
            </thead>
            <tbody>
            {(products) ?
                products.map((product, key) =>
                    <AdminProductItem key={key} product={product}/>
                )
                :
                <tr></tr>
            }
            </tbody>
        </Table>
    );
})

export default AdminProductsList;
