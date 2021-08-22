import React, {useContext, useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {
    Col,
    ListGroup
} from "react-bootstrap";
import {PRODUCT_ROUTE, SHOP_CATEGORY_ROUTE} from "../../utils/consts";
import {useHistory} from "react-router-dom";
import {
    fetchCategories
} from "../../apis/shopAPI";

const TypeBar = observer(() => {
    const {shop} = useContext(Context)
    const history = useHistory()
    // const getCategories = (useEffect(() => {
    //     fetchCategories().then(data => shop.setCategories(data))
    // }, []))
    console.log(shop.categories)


    return (
        <ListGroup>
            {shop.categories.hasOwnProperty('child_categories') !== false ?
                shop.categories.child_categories.length !== 0 ?
                    shop.categories.child_categories.map(category =>
                        <ListGroup.Item
                            style={{cursor: 'pointer'}}
                            key={category.id}
                            onClick={() => history.push(SHOP_CATEGORY_ROUTE + '/' + category.id)}
                        >{category.title}</ListGroup.Item>)
                    :
                    <div>
                        <ListGroup.Item
                            style={{cursor: 'pointer'}}
                        >Не найдено</ListGroup.Item>
                    </div>
                : <div>
                    <ListGroup.Item
                        style={{cursor: 'pointer'}}
                    >Не найдено</ListGroup.Item>
                </div>
            }
        </ListGroup>
    );
})

export default TypeBar;
