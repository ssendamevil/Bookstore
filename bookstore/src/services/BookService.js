import {$host} from "../http";

export const fetchAllBooks = async () => {
    const response = await $host.get('api/books', {withCredentials: true})
    return response
}

export const fetchBookById = async (id) => {
    const response = await $host.get(`api/book/${id}`, {withCredentials: true})
    return response
}
