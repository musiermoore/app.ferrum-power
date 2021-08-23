import React, {useContext, useState} from 'react';
import {Button, Card, Container, Form} from "react-bootstrap";
import {signIn} from "../../apis/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {useHistory} from "react-router-dom";
import {SHOP_ROUTE} from "../../utils/consts";

const SignIn = observer(() => {
    const {user} = useContext(Context)
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory();

    const signInFunc = async () => {
        try {
            const userData = await signIn(login, password)
            console.log(userData)
            user.setUser(userData)
            user.setIsAuth(true)

            // TODO: change route to admin panel
            history.push(SHOP_ROUTE)
        } catch (e) {
            console.log(e.code)
        }
    }

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card  style={{width: 600}} className="p-5">
                <h2 className="m-auto">Авторизация</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите логин"
                        name="login"
                        value={login}
                        onChange={e => setLogin(e.target.value)}
                    />
                    <Form.Control
                        className="mt-2"
                        placeholder="Введите пароль"
                        type="password"
                        name="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <Button
                        variant={"outline-success"}
                        className="mt-2"
                        onClick={signInFunc}
                    >Войти</Button>
                </Form>
            </Card>
        </Container>
    );
});

export default SignIn;