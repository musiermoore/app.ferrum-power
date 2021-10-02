import React, {useContext, useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../../index";
import {Table} from "react-bootstrap";
import AdminUserItem from "./AdminUserItem";

const AdminUserList = observer(() => {
    const {adminUser} = useContext(Context)

    const [users, setUsers] = useState([]);

    useEffect(() => {
        setUsers(adminUser.users);
        adminUser.setUpdateUserList(false)
    }, [adminUser.users]);

    console.log(users);
    return (
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>#</th>
                <th>Фамилия</th>
                <th>Имя</th>
                <th>Отчество</th>
                <th>Логин</th>
                <th>Роли</th>
                <th>Действия</th>
            </tr>
            </thead>
            <tbody>
            {(users.length) ?
                users.map((user, key) =>
                    <AdminUserItem key={key} user={user}/>
                )
                :
                <tr></tr>
            }
            </tbody>
        </Table>
    );
})

export default AdminUserList;
