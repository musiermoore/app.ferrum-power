import {$authHost, $host} from "./indexAPI";

export const makeOrder = async (name, phone, email, description, address, products) => {
    const {data} = await $host.post('orders', {
        name,
        phone,
        email,
        description,
        address,
        products
    })

    return data
}


