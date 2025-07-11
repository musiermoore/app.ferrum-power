import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {Link, NavLink, useHistory} from "react-router-dom";
import {
    ADMIN_CATEGORIES_LIST,
    ADMIN_ORDERS_LIST,
    ADMIN_PRODUCT_LIST,
    ADMIN_USERS_LIST,
    CART_ROUTE,
    LOGIN_ROUTE,
    REGISTRATION_ROUTE,
    SHOP_ROUTE
} from "../utils/consts";
import {observer} from "mobx-react-lite";
// import {logout} from "../http/userAPI";

const Navigation = observer(() => {
    const {user, cart} = useContext(Context)
    const history = useHistory()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        history.push(LOGIN_ROUTE)
        // logout()
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container>

                <Navbar.Brand onClick={() => history.push(SHOP_ROUTE)}>
                    Navbar
                </Navbar.Brand>

                <Nav className="me-auto">
                    <div className="">
                        {/*<Link to={ADMIN}>Админ</Link>*/}
                            <Link className="nav-link" to={SHOP_ROUTE}>Каталог</Link>

                    </div>
                </Nav>

                <Nav className="ml-auto">
                    {user.isAuth
                        ?
                        <Nav className="ml-auto">
                            <Link className="nav-link" to={REGISTRATION_ROUTE}>Регистрация</Link>
                            <Link className="nav-link" to={ADMIN_CATEGORIES_LIST}>Категории</Link>
                            <Link className="nav-link" to={ADMIN_PRODUCT_LIST}>Продукты</Link>
                            <Link className="nav-link" to={ADMIN_USERS_LIST}>Пользователи</Link>
                            <Link className="nav-link" to={ADMIN_ORDERS_LIST}>Заказы</Link>

                            <Button
                                className="nav-btn"
                                variant={"outline-light"}
                                onClick={logOut}
                            >Выход</Button>
                        </Nav>
                        : ''
                    }
                </Nav>
                <Nav className="ml-auto">
                    <Button
                        className="nav-btn"
                        variant={"outline-light"}
                        onClick={() => history.push(CART_ROUTE)}
                    >Корзина: {cart.quantity}</Button>
                </Nav>


            </Container>
        </Navbar>
        // <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        //     <Container>
        //         <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        //         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        //         <Navbar.Collapse id="responsive-navbar-nav">
        //             <Nav className="me-auto">
        //                 <Nav.Link href="#features">Features</Nav.Link>
        //                 <Nav.Link href="#pricing">Pricing</Nav.Link>
        //                 <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        //                     <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        //                     <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        //                     <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        //                     <NavDropdown.Divider />
        //                     <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        //                 </NavDropdown>
        //             </Nav>
        //             <Nav>
        //                 <Nav.Link href="#deets">More deets</Nav.Link>
        //                 <Nav.Link eventKey={2} href="#memes">
        //                     Dank memes
        //                 </Nav.Link>
        //             </Nav>
        //         </Navbar.Collapse>
        //     </Container>
        // </Navbar>
    );
});

export default Navigation;