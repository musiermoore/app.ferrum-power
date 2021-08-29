import {$authHost} from "./indexAPI";

export const createCategory = async (parent_id, title, slug, description, image_path) => {
    const {data} = await $authHost.post('admin/categories', {
        parent_id, title, slug, description, image_path
    })
    return data
}

export const updateCategory = async (id, parent_id, title, slug, description, image_path) => {
    const {data} = await $authHost.patch('admin/categories/' + id, {
        parent_id, title, slug, description, image_path
    })
    return data
}

export const getCategoryForEdit = async (id) => {
    const {data} = await $authHost.get('admin/categories/' + id)
    return data
}

export const fetchCategoriesForAdmin = async () => {
    const {data} = await $authHost.get('admin/categories')
    return data
}

export const deleteCategory = async (id) => {
    const {data} = await $authHost.delete('admin/categories/' + id)
    return data
}

/*
 * Products admin
 */
export const createProduct = async (category_id, title, slug, description, image_path, stock_availability, price) => {
    const {data} = await $authHost.post('admin/products', {
        category_id,
        title,
        slug,
        description,
        image_path,
        stock_availability,
        price,
    })

    return data
}
export const fetchProductsForAdmin = async () => {
    const {data} = await $authHost.get('admin/products')
    return data
}

export const deleteProduct = async (id) => {
    const {data} = await $authHost.delete('admin/products/' + id)
    return data
}

export const updateProduct = async (id, category_id, title, slug, description, image_path, stock_availability, price) => {
    const {data} = await $authHost.patch('admin/products/' + id, {
        category_id,
        title,
        slug,
        description,
        image_path,
        stock_availability,
        price
    })
    return data
}

export const getProductForEdit = async (id) => {
    const {data} = await $authHost.get('admin/products/' + id)
    return data
}