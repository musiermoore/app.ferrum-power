
import {$authHost, $host} from "./indexAPI";

export const registration = async (lastname, firstname, patronymic, login, password, password_confirmation, role) => {
    const {data} = await $authHost.post('admin/user/register', {
        lastname,
        firstname,
        patronymic,
        login,
        password,
        password_confirmation,
        role
    })

    return data
}

export const signIn = async (login, password) => {
    const {data} = await $host.post('admin/user/login', {login, password})
    localStorage.setItem('token', data.token)
    return data.user
}

export const check = async () => {
    const {data} = await $authHost.get('admin/user/auth' )
    // localStorage.setItem('token', data.token)
    return data
}

export const logout = async () => {
    await $authHost.post('admin/user/logout' )
    localStorage.removeItem('token')
}

export const fetchRoles = () => {
    const {data} = $authHost.get('admin/roles')
    console.log(data)
    return data
}