import {$host, $authHost} from "../http";

export const registration = async (email, password, name, surname) => {
    const response = await $host.post('api/registration', {email, password, name, surname}, {withCredentials: true});
    return response
}

export const login = async (email, password) => {
    const response = await $host.post('api/login', {email, password}, {withCredentials: true});
    return response
}

export const logout = async () => {
    const response = await $host.post('api/logout', {}, {withCredentials: true});
    return response
}

export const checkAuth = async () => {
    const response = await $host.get('api/refresh', {withCredentials: true})
    return response
}

export const addBookToCart = async (userId, bookId) => {
    const response = await  $host.post('api/addBook', {userId, bookId}, {withCredentials: true})
    return response
}

export const getCartBooks = async (userId) => {
    const response = await  $host.post('api/getCartItems', {userId}, {withCredentials: true})
    return response
}

export const updateCart = async (userId, idx,qnt, key) => {
    const response = await $host.post('api/updateCart', {userId, idx, qnt, key}, {withCredentials: true})
    return response
}