import {$authHost, $host} from "./indexAPI";

export const createType = async (type) => {
    const {data} = await $authHost.post('api/type', type)
    return data
}

export const fetchCategories = async (id = 1) => {
    if (id === undefined) id = 1;
    const {data} = await $host.get('categories/' + id)
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
