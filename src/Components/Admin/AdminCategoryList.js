import React, {useContext, useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {Table} from "react-bootstrap";
import AdminCategoryItem from "./AdminCategoryItem";

const AdminProductsList = observer(() => {
    const {adminShop} = useContext(Context)

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        setCategories(adminShop.categories);
        adminShop.setUpdatedCategoriesList(false)
    }, [adminShop.categories]);

    return (
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>#</th>
                <th>Название категории</th>
                <th>Родительская категория</th>
                <th>Ссылка</th>
                <th>Действия</th>
            </tr>
            </thead>
            <tbody>
            {(categories) ?
                categories.map((category, key) =>
                    <AdminCategoryItem key={key} category={category}/>
                )
                : ''}
            </tbody>
        </Table>
    );
})

export default AdminProductsList;
