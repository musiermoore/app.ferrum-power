import {makeAutoObservable} from "mobx";

export default class AdminShopStore {
    constructor() {
        // this._categories = [
        //     {id: 1, title: 'title', slug: 'slug', description: 'lorem text lorem text lorem text', image_path: 'default.png', parent_id: 0},
        //     {id: 2, title: 'child title', slug: 'child slug', description: 'child lorem text lorem text lorem text', image_path: 'default.png', parent_id: 1},
        //     {id: 3, title: 'other title', slug: 'other slug', description: 'other lorem text lorem text lorem text', image_path: 'default.png', parent_id: 2},
        // ];
        this._categories = []
        this._category = {}
        this._needUpdateCategory = true;

        this._products = []
        this._product = {}
        this._needUpdateProduct = true;

        this._selectedCategory = {};
        makeAutoObservable(this)
    }

    setCategories(categories) {
        this._categories = categories;
    }

    setProducts(products) {
        this._products = products;
    }

    setSelectedCategory(category) {
        this._selectedCategory = category;
    }

    setCategory(category) {
        this._category = category;
    }

    deleteCategoryFromStore(category) {
        this.setUpdatedCategoriesList(true);
        this._categories = this._categories.filter(element => element.id !== category.category.id);
    }

    deleteProductFromStore(product) {
        this.setUpdatedProductsList(true);
        this._products = this._products.filter(element => element.id !== product.id);
    }

    setUpdatedCategoriesList(bool) {
        this._needUpdateCategory = bool;
    }

    setUpdatedProductsList(bool) {
        this._needUpdateProduct = bool;
    }

    setProduct(product) {
        this._product = product;
    }

    get categories() {
        return this._categories;
    }

    get category() {
        return this._category;
    }

    get products() {
        return this._products;
    }

    get product() {
        return this._product;
    }

    get selectedCategory() {
        return this._selectedCategory;
    }

    get needUpdatedCategory() {
        return this._needUpdateCategory;
    }

    get needUpdatedProduct() {
        return this._needUpdateProduct;
    }

}