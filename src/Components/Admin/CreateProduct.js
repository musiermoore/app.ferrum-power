import React, {useContext} from 'react';
import {Button, Dropdown, Form, Modal} from "react-bootstrap";
import {Context} from "../../index";

const CreateProduct = ({show, onHide}) => {
    const {shop} = useContext(Context);

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить товар
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown
                        className="mt-2">
                        <Dropdown.Toggle>Выберите тип</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {shop.categories.map(category =>
                                <Dropdown.Item key={category.id}>{category.title}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                        <Form.Control
                            className="mt-2"
                            placeholder="Введите название товара"
                            type="text"
                        />
                        <Form.Control
                            className="mt-2"
                            placeholder="Введите ссылку на товар"
                            type="text"
                        />
                        <Form.Control
                            className="mt-2"
                            placeholder="Введите цену товара"
                            type="number"
                        />
                        <Form.Control
                            className="mt-2"
                            placeholder="Введите описание товара"
                            type="text"
                        />
                        <Form.Control
                            className="mt-2"
                            placeholder="Выберите изображение товара"
                            type="file"
                        />
                    </Dropdown>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={onHide}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateProduct;