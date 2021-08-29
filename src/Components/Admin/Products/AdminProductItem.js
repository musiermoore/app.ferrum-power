import React, {useContext} from 'react';
import {useHistory} from "react-router-dom";
import {Context} from "../../../index";
import {Button} from "react-bootstrap";
import {deleteProduct} from "../../../apis/adminCategoryAPI";
import {EDIT_PRODUCT_ROUTE} from "../../../utils/consts";

const AdminProductItem = ({product}) => {
    const history = useHistory()
    const {adminShop} = useContext(Context)

    const destroyProduct = (product) => {
        let isDeleteProduct = window.confirm(`Продукт "${product.id}. ${product.title}" будет удален. \nПродолжить?`)

        if (isDeleteProduct) {
            deleteProduct(product.id).then(data => {
                adminShop.deleteProductFromStore(product);
            })
        }
    }

    return (

        <tr>
            <td>{product.id}</td>
            <td>{product.title}</td>
            <td>{product.slug}</td>
            <td>{product.category.id}. {product.category.title}</td>
            <td>{product.stock_availability ? "Есть" : "Нет"}</td>
            <td>{product.price} р.</td>

            <td className="">
                <div className="btn-delete mr-2">
                    <Button
                        className={"mt-2 p-1"}
                        variant={"danger"}
                        onClick={() => destroyProduct(product)}
                    >Удалить</Button>
                </div>

                <div className="btn-edit">
                    <Button
                        className={"mt-2 p-1"}
                        variant={"primary"}
                        onClick={() =>history.push(`${EDIT_PRODUCT_ROUTE}/${product.id}/edit`)}
                    >Изменить</Button>
                </div>
            </td>
        </tr>
    );
};

export default AdminProductItem;