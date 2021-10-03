import {$authHost} from "./indexAPI";

export const fetchOrdersForAdmin = async () => {
    const {data} = await $authHost.get('admin/orders')

    return data
}

export const orderUser = async (id, parent_id, title, slug, description, image_path) => {
    const {data} = await $authHost.patch('admin/users/' + id, {
        parent_id, title, slug, description, image_path
    })
    return data
}

export const getOrderForEdit = async (id) => {
    const {data} = await $authHost.get('admin/orders/' + id)
    return data
}

export const deleteOrder = async (id) => {
    const {data} = await $authHost.delete('admin/orders/' + id)
    return data
}