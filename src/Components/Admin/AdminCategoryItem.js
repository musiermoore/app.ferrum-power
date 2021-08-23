import React, {useContext} from 'react';
import {Link, useHistory} from "react-router-dom";
import {Context} from "../../index";
import {Button} from "react-bootstrap";
import {deleteCategory} from "../../apis/adminCategoryAPI";
import {CREATE_CATEGORY_ROUTE, EDIT_CATEGORY_ROUTE} from "../../utils/consts";

const AdminCategoryItem = ({category}) => {
    const history = useHistory()
    const {adminShop} = useContext(Context)

    const destroyCategory = (category) => {
        let isDeleteCategory = window.confirm(`Категория "${category.category.id}. ${category.category.title}" будет удалена. \nПродолжить?`)

        if (isDeleteCategory) {
            deleteCategory(category.category.id).then(data => {
                adminShop.deleteCategoryFromStore(category);
            })
        }
    }

    return (

        <tr>
            <td>{category.category.id}</td>
            <td>{category.category.title}</td>
            <td>{category.category.parent_id}. {category.category.parent_name}</td>
            <td>{category.category.slug}</td>
            <td className="">
                <div className="btn-delete mr-2">
                    <Button
                        className={"mt-2 p-1"}
                        variant={"danger"}
                        onClick={() => destroyCategory(category)}
                    >Удалить</Button>
                </div>

                <div className="btn-edit">
                    <Button
                        className={"mt-2 p-1"}
                        variant={"primary"}
                        onClick={() =>history.push(`${EDIT_CATEGORY_ROUTE}/${category.category.id}/edit`)}
                    >Изменить</Button>
                </div>
            </td>
        </tr>
    );
};

export default AdminCategoryItem;