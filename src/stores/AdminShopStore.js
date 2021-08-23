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
        this._selectedCategory = {};
        this._needUpdated = true;
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
        this.needUpdatedCategoriesList(true);
        this._categories = this._categories.filter(element => element.id !== category.category.id);
    }

    needUpdatedCategoriesList(bool) {
        this._needUpdated = bool;
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

    get selectedCategory() {
        return this._selectedCategory;
    }

    get needUpdated() {
        return this._needUpdated;
    }

}