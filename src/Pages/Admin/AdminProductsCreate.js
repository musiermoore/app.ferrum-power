import React, {useContext, useEffect, useState} from 'react';
import {Button, Card, Container, Form} from "react-bootstrap";
import {createCategory, createProduct, fetchCategoriesForAdmin} from "../../apis/adminCategoryAPI";
import {Context} from "../../index";
import {useHistory} from "react-router-dom";


const AdminCategoriesCreate = () => {
    const {adminShop} = useContext(Context)
    const history = useHistory()

    const [categories, setCategories] = useState('')

    useEffect(() => {
        fetchCategoriesForAdmin().then(data => {
            adminShop.setCategories(data.categories)
            setCategories(adminShop.categories)
        })
    }, [])

    const [categoryId, setCategoryId] = useState('')
    const [title, setTitle] = useState('')
    const [slug, setSlug] = useState('')
    const [description, setDescription] = useState('')
    const [imagePath, setImagePath] = useState('')
    const [stockAvailability, setStockAvailability] = useState(false)
    const [price, setPrice] = useState('')

    const [response, setResponse] = useState('');

    const storeCategory = async () => {
        try {
            let response = await createProduct(categoryId, title, slug, description, imagePath, stockAvailability, price)
            setResponse(response)
        } catch (e) {
            let data = e.response.data;
            setResponse(data.errors[0]);
        }
    }

    return (
        <Container
            className="d-flex justify-content-center align-items-center mt-5"
        >
            <Card  style={{width: 600}} className="p-5">
                <h2 className="m-auto">Создать продукт</h2>
                <Form className="d-flex flex-column">
                    <Form.Select
                        aria-label="Default select example"
                        onChange={e => setCategoryId(e.target.value)}
                    >
                        <option disabled selected>Выберите родительскую категорию</option>
                        {adminShop.categories.map((category, key) => (
                            <option
                                key={key}
                                value={category.category.id}
                            >{category.category.id}. {category.category.title}</option>
                        ))}
                    </Form.Select>
                    <Form.Control
                        className="mt-2"
                        placeholder="Введите название товара"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <Form.Control
                        className="mt-2"
                        placeholder="Введите ссылку на товар"
                        value={slug}
                        onChange={e => setSlug(e.target.value)}
                    />
                    <Form.Control
                        className="mt-2"
                        placeholder="Введите описание товара"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <Form.Control
                        className="mt-2"
                        placeholder="Выберите изображение"
                        type="file"
                        value={imagePath}
                        onChange={e => setImagePath(e.target.value)}
                    />
                    <Form.Control
                        className="mt-2"
                        placeholder="Введите цену"
                        type="number"
                        value={price}
                        onChange={e => setPrice(e.target.value)}
                    />
                    <Form.Select
                        className="mt-2"
                        aria-label="Default select example"
                        onChange={e => setStockAvailability(e.target.value)}
                    >
                        <option value="def" disabled selected>Наличие на складе</option>
                        <option
                            value="1"
                        >В наличии</option>
                        <option
                            value="0"
                        >Отсутствует</option>
                    </Form.Select>
                    <Button
                        variant={"outline-success"}
                        className="mt-2"
                        onClick={storeCategory}
                    >Создать</Button>
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

export default AdminCategoriesCreate;