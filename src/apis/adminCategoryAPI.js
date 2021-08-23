import {$authHost, $host} from "./indexAPI";

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

export const fetchCategoriesForAdmin = async (id = 1) => {
    const {data} = await $authHost.get('admin/categories')
    return data
}

export const createBrand = async (brand) => {
    const {data} = await $authHost.post('api/brand', brand)
    return data
}

export const fetchBrands = async () => {
    const {data} = await $host.get('api/brand', )
    return data
}

export const createDevice = async (device) => {
    const {data} = await $authHost.post('api/device', device)
    return data
}

export const fetchDevices = async (typeId, brandId, page, limit= 5) => {
    const {data} = await $host.get('api/device', {params: {
            typeId, brandId, page, limit
        }})
    return data
}

export const fetchOneProduct = async (id) => {
    const {data} = await $host.get('products/' + id)
    return data
}

export const deleteCategory = async (id) => {
    const {data} = await $authHost.delete('admin/categories/' + id)
    return data
}