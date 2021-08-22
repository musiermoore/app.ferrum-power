import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {Row} from "react-bootstrap";
import ProductItem from "./ProductItem";

const ProductsList = observer(() => {
    const {shop} = useContext(Context)

    return (
        <Row className="d-flex">
            {(shop.categories.hasOwnProperty('products') !== false) ?
                shop.categories.products.length > 0 ?
                    shop.categories.products.map(product =>
                        <ProductItem key={product.id} product={product}/>
                    )
                    :
                    <div>
                        <h3>Товары не найдены</h3>
                    </div>
            : ''}
        </Row>
    );
})

export default ProductsList;
