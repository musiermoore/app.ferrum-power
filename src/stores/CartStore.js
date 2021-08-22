import {makeAutoObservable} from "mobx";

export default class CartStore {
    constructor() {
        this._cartProducts = [];
        this._quantity = 0;

        if (localStorage.getItem('cart')) {
            let cartProducts = JSON.parse(localStorage.getItem('cart'));

            if (cartProducts.length) {
                this._cartProducts = cartProducts;
                this._quantity = localStorage.getItem('cart_quantity');
            }
        }

        makeAutoObservable(this)
    }

    addProductToCart(product, quantity) {

        if (quantity === 0 || quantity === undefined || quantity === null) {
            quantity = 1;
        }

        let cartProductIndex = this._cartProducts.findIndex(cartProduct => cartProduct.id === product.id);

        if (this._cartProducts.filter(cartProduct => cartProduct.id === product.id).length === 0) {
            product.quantity = quantity
            console.log(product.quantity);
            this._cartProducts.push(product)
            this._quantity++;
        } else {
            this._cartProducts[cartProductIndex].quantity++;
        }

        this.updateCart();
    }

    removeProductFromCart(product) {
        if (this._cartProducts.find(cartProduct => cartProduct.id === product.id)) {
            this._cartProducts = this._cartProducts.filter(cartProduct => cartProduct.id !== product.id);
        }

        this._quantity--;

        this.updateCart();
    }

    get cartProducts() {
        return this._cartProducts;
    }

    get quantity() {
        return this._quantity;
    }

    get cartProductsForOrder() {
        let products = this.cartProducts;
        let productsWithQuantityForOrder = [];

        products.forEach(product => {
            productsWithQuantityForOrder.push({
                'product_id': product.id,
                'quantity': product.quantity
            })
        })

        return productsWithQuantityForOrder;
    }

    // ===============

    updateCart() {
        localStorage.setItem('cart', JSON.stringify(this._cartProducts))
        localStorage.setItem('cart_quantity', this._quantity)
    }
}