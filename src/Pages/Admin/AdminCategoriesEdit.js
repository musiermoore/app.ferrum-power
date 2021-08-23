import React, {useContext, useEffect, useState} from 'react';
import {Button, Card, Container, Form, Spinner} from "react-bootstrap";
import {updateCategory, fetchCategoriesForAdmin, getCategoryForEdit} from "../../apis/adminCategoryAPI";
import {Context} from "../../index";
import {useHistory, useParams} from "react-router-dom";


const AdminCategoriesEdit = () => {
    const {adminShop} = useContext(Context)
    const history = useHistory()
    const {id} = useParams();

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetchCategoriesForAdmin().then(data => {
            adminShop.setCategories(data.categories)
            setCategories(adminShop.categories);
        })
    }, [])



    useEffect(() => {

    }, []);

    const [needUpdate, setNeedUpdate] = useState(true)
    const [category, setCategory] = useState('')

    const [parentId, setParentId] = useState(0)
    const [title, setTitle] = useState('')
    const [slug, setSlug] = useState('')
    const [description, setDescription] = useState('')
    const [imagePath, setImagePath] = useState('')
    const [response, setResponse] = useState('');


    useEffect(() => {
        getCategoryForEdit(id).then(data => {
            adminShop.setCategory(data.category)
            setCategory(adminShop.category)
            setNeedUpdate(false);
        }).finally(() => setLoading(false))

    }, [needUpdate])

    useEffect(() => {
        console.log(category);
        setTitle(category.title ?? "")
        setSlug(category.slug ?? "")

        setDescription(category.description ?? "")
        setParentId(category.parent_id ?? "def")
    }, [category])



    const [loading, setLoading] = useState(true)

    const updateCurrentCategory = async () => {
        try {
            await updateCategory(id, parentId, title, slug, description, imagePath)

            setNeedUpdate(true);
            alert(`Категория "${category.title}" изменена`)

        } catch (e) {

            let errors = e.response.data;
            // let error = [];
            // errors.forEach((err) => {
            //
            // })
            console.log(errors)
        }
    }

    if (loading) {
        return <Spinner animation={"grow"}/>
    }

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card  style={{width: 600}} className="p-5">
                <h2 className="m-auto">Редактирование категории "{category.title}"</h2>
                <Form className="d-flex flex-column">
                    <Form.Select
                        aria-label="Default select example"
                        onChange={e => setParentId(e.target.value)}
                        value={parentId}
                    >
                        <option value="def" disabled>Выберите родительскую категорию</option>
                        {categories.map((cat, key) => (
                            <option
                                key={cat.category.id}
                                value={cat.category.id}
                            >{cat.category.id}. {cat.category.title}</option>
                        ))}
                    </Form.Select>
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите название категории"
                        value={`${title}`}
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
                        onClick={updateCurrentCategory}
                    >Обновить</Button>
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

export default AdminCategoriesEdit;