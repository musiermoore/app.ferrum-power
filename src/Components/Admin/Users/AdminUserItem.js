import React, {useContext} from 'react';
import {useHistory} from "react-router-dom";
import {Context} from "../../../index";
import {Button} from "react-bootstrap";
import {EDIT_USER_ROUTE} from "../../../utils/consts";
import {deleteUser} from "../../../apis/adminUserAPI";

const AdminUserItem = ({user}) => {
    const history = useHistory()
    const {adminUser} = useContext(Context)

    const destroyProduct = (user) => {
        let isDeleteProduct = window.confirm(`Пользователь "${user.id}. ${user.title}" будет удален. \nПродолжить?`)

        if (isDeleteProduct) {
            deleteUser(user.id).then(data => {
                adminUser.deleteUserFromStore(user);
            })
        }
    }

    return (

        <tr>
            <td>{user.id}</td>
            <td>{user.lastname}</td>
            <td>{user.firstname}</td>
            <td>{user.patronymic}</td>
            <td>{user.login}</td>
            <td>{user.roles}</td>

            <td className="">
                <div className="btn-delete mr-2">
                    <Button
                        className={"mt-2 p-1"}
                        variant={"danger"}
                        onClick={() => destroyProduct(user)}
                    >Удалить</Button>
                </div>

                <div className="btn-edit">
                    <Button
                        className={"mt-2 p-1"}
                        variant={"primary"}
                        onClick={() =>history.push(`${EDIT_USER_ROUTE}/${user.id}/edit`)}
                    >Изменить</Button>
                </div>
            </td>
        </tr>
    );
};

export default AdminUserItem;