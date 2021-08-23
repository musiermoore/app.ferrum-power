import React, {useState} from 'react';
import {Button, Card, Container, Form} from "react-bootstrap";
import {fetchRoles, registration} from "../../apis/userAPI";


const SignUp = () => {

    const [lastname, setLastname] = useState('')
    const [firstname, setFirstname] = useState('')
    const [patronymic, setPatronymic] = useState('')
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [role, setRole] = useState('')

    const roles = [
        {id: 1, name: "Админ"},
        {id: 2, name: "Оператор"}
    ];

    const [response, setResponse] = useState('');

    const signUp = async () => {
        setResponse('')
        try {
            let response = await registration(lastname, firstname, patronymic, login, password, passwordConfirmation, role)
            setResponse(response);
        } catch (e) {
            setResponse(e.response.data);
        }

    }

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card  style={{width: 600}} className="p-5">
                <h2 className="m-auto">Регистрация</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите фамилию"
                        value={lastname}
                        onChange={e => setLastname(e.target.value)}
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите имя"
                        value={firstname}
                        onChange={e => setFirstname(e.target.value)}
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите отчество"
                        value={patronymic}
                        onChange={e => setPatronymic(e.target.value)}
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите логин"
                        value={login}
                        onChange={e => setLogin(e.target.value)}
                    />
                    <Form.Control
                        className="mt-2"
                        placeholder="Введите пароль"
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <Form.Control
                        className="mt-2"
                        placeholder="Введите повторно пароль"
                        type="password"
                        value={passwordConfirmation}
                        onChange={e => setPasswordConfirmation(e.target.value)}
                    />
                    {roles.map((role, key) => (
                        <Form.Check
                            type="radio"
                            name="role"
                            id={`role-${key}`}
                            label={role.name}
                            value={role.id}
                            onChange={e => setRole(e.target.value)}
                        />
                    ))}
                    <Button
                        variant={"outline-success"}
                        className="mt-2"
                        onClick={signUp}
                    >Войти</Button>
                </Form>
                {response !== '' ?
                    <div>
                        {response.message}
                        <div className="div">
                            {response.errors ?
                                Object.entries(response.errors).map((value, key) => {
                                    <div>
                                        {key}
                                    </div>
                                }) : ''
                            }
                        </div>
                    </div>
                    : ''

                }

            </Card>
        </Container>
    );
};

export default SignUp;