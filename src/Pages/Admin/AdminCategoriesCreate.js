import React, {useContext, useEffect, useState} from 'react';
import {Button, Card, Container, Form} from "react-bootstrap";
import {createCategory, fetchCategoriesForAdmin} from "../../apis/adminCategoryAPI";
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

    const [parentId, setParentId] = useState('')
    const [title, setTitle] = useState('')
    const [slug, setSlug] = useState('')
    const [description, setDescription] = useState('')
    const [imagePath, setImagePath] = useState('')

    const [response, setResponse] = useState('');

    const storeCategory = async () => {
        try {
            let response = await createCategory(parentId, title, slug, description, imagePath)

            setResponse(response)
        } catch (error) {
            let data = error.response.data;

            if (error.response.status === 422) {
                setResponse(data.errors[0])
            }
        }
    }

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card  style={{width: 600}} className="p-5">
                <h2 className="m-auto">Создать категорию</h2>
                <Form className="d-flex flex-column">
                    <Form.Select
                        aria-label="Default select example"
                        onChange={e => setParentId(e.target.value)}
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
                        className="mt-3"
                        placeholder="Введите название категории"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите ссылку на категорию"
                        value={slug}
                        onChange={e => setSlug(e.target.value)}
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите описание категории"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Выберите изображение"
                        type="file"
                        value={imagePath}
                        onChange={e => setImagePath(e.target.value)}
                    />
                    <Button
                        variant={"outline-success"}
                        className="mt-3"
                        onClick={storeCategory}
                    >Создать</Button>
                </Form>
                {response != false ?
                    <div>
                        {response.message}
                        <div className="div">
                            {response.errors ?
                                Object.entries(response.errors).map((value, key) => {
                                    <div>
                                        {
                                            key
                                        }
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