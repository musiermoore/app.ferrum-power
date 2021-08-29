import React, {useContext, useEffect, useState} from 'react';
import {Button, Card, Container, Form, Spinner} from "react-bootstrap";
import {
    updateCategory,
    fetchCategoriesForAdmin,
    getCategoryForEdit,
    updateProduct,
    getProductForEdit
} from "../../apis/adminCategoryAPI";
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

    const [needUpdate, setNeedUpdate] = useState(true)
    const [product, setProduct] = useState('')
    const [productCategory, setProductCategory] = useState('');

    const [categoryId, setCategoryId] = useState(0)
    const [title, setTitle] = useState('')
    const [slug, setSlug] = useState('')
    const [description, setDescription] = useState('')
    const [imagePath, setImagePath] = useState('')
    const [stockAvailability, setStockAvailability] = useState('');
    const [price, setPrice] = useState('');

    const [response, setResponse] = useState('');

    useEffect(() => {
        getProductForEdit(id).then(data => {
            adminShop.setProduct(data.product)
            setProduct(adminShop.product)
            setProductCategory(data.product.category)

            setNeedUpdate(false);
        }).finally(() => setLoading(false))

    }, [needUpdate])


    useEffect(() => {
        setTitle(product.title ?? "")
        setSlug(product.slug ?? "")

        setDescription(product.description ?? "")
        setStockAvailability(product.stock_availability)
        setPrice(product.price)
        setCategoryId(productCategory.id ?? "def")
    }, [product])



    const [loading, setLoading] = useState(true)

    const updateCurrentCategory = async () => {
        try {
            await updateProduct(id, categoryId, title, slug, description, imagePath, stockAvailability, price)

            setNeedUpdate(true);
            alert(`Продукт "${product.title}" изменен`)

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
                <h2 className="m-auto">Редактирование категории "{product.title}"</h2>
                <Form className="d-flex flex-column">
                    <Form.Select
                        aria-label="Default select example"
                        onChange={e => setCategoryId(e.target.value)}
                        value={categoryId}
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
                        value={stockAvailability}
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