import {$authHost} from "./indexAPI";

export const fetchUsersForAdmin = async () => {
    const {data} = await $authHost.get('admin/users')

    return data
}

export const updateUser = async (id, parent_id, title, slug, description, image_path) => {
    const {data} = await $authHost.patch('admin/users/' + id, {
        parent_id, title, slug, description, image_path
    })
    return data
}

export const getUserForEdit = async (id) => {
    const {data} = await $authHost.get('admin/users/' + id)
    return data
}

export const deleteUser = async (id) => {
    const {data} = await $authHost.delete('admin/users/' + id)
    return data
}